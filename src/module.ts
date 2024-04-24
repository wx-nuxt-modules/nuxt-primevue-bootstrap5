import { defineNuxtModule, installModule, createResolver, useLogger, addComponent, addImportsDir } from '@nuxt/kit';
import { promises as fsp } from 'node:fs';
import { globby } from 'globby';
import * as pathe from 'pathe';
import * as pkg from '../package.json';

export interface ModuleOptions {
  prefix?: string;
}

const PACKAGE_NAME = pkg.name;

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: PACKAGE_NAME,
    configKey: 'primevueBootstrap',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    prefix: 'B'
  },
  async setup(options, nuxt) {
    const logger = useLogger(PACKAGE_NAME);
    const { resolve } = createResolver(import.meta.url);

    await installModule('nuxt-primevue', {
      options: {
        unstyled: true,
        ripple: false
      },
      components: {
        prefix: options.prefix,
        include: '*'
      },
      importPT: { from: resolve('runtime/presets/bootstrap5/passthrough') }
    });

    const components = await globby(resolve('runtime/components', '**', '*.vue'));

    const typesDir = resolve(nuxt.options.buildDir, 'components.d.ts');

    let overrideItems: any[];

    nuxt.hook('components:extend', async (components) => {
      overrideItems = components
        .filter((component) => component.filePath.startsWith('primevue/'))
        .map((component) => {
          const shortName = component.kebabName.split('-').slice(1).join('');
          const fullPath = resolve(`runtime/presets/bootstrap5/${shortName}/types`);
          const relativePath = pathe.relative(nuxt.options.buildDir, fullPath);

          return [component.filePath, relativePath];
        });
    });

    nuxt.hook('app:templatesGenerated', async (app) => {
      let content = await fsp.readFile(typesDir).then((b) => b.toString());
      overrideItems.forEach(([name, path]) => {
        content = content.replace(RegExp(`['"]${name}['"]`, 'g'), `"${path}"`);
      });

      await fsp.writeFile(typesDir, content);
    });

    for (const component of components) {
      const { name } = pathe.parse(component);
      await addComponent({
        name: `${options.prefix}${name}`,
        filePath: component,
        priority: 10
      });
    }

    addImportsDir(resolve('runtime/composables'));

    logger.success('Setup end');
  }
});
