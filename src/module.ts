import type { Nuxt } from '@nuxt/schema';
import type { AddComponentOptions } from '@nuxt/kit';
import { promises as fsp } from 'node:fs';
import {
  defineNuxtModule,
  installModule,
  createResolver,
  useLogger,
  addComponent as baseAddComponent,
  addImportsDir,
  addTemplate
} from '@nuxt/kit';
import { globby } from 'globby';
import * as pathe from 'pathe';
import { defu } from 'defu';
import { isPromise } from '@windx-foobar/shared';

import pkg from '../package.json';

export interface ModuleOptions {
  prefix?: string;
}

const PACKAGE_NAME = pkg.name;

const generateComponentTypes = async (nuxt: Nuxt, globPath: string) => {
  const { resolve } = createResolver(import.meta.url);

  const bootstrap5PresetTypes = await globby(resolve(globPath));

  const parsePath = (path: string) => {
    const parsed = pathe.parse(pathe.resolve(path));

    return {
      ...parsed,
      upperFirstName: parsed.name.slice(0, 1).toUpperCase() + parsed.name.slice(1)
    };
  };

  bootstrap5PresetTypes.forEach((path) => {
    const { name } = parsePath(pathe.resolve(path, '..'));

    addTemplate({
      filename: `nuxt-primevue-bootstrap5/bootstrap5/${name}.d.ts`,
      getContents: () => {
        const currentPath = pathe.relative(resolve(nuxt.options.buildDir, 'nuxt-primevue-bootstrap5/bootstrap5'), path);
        return [`export type * from '${currentPath}'`, `export type { default } from '${currentPath}'`].join('\n');
      }
    });
  });
};

// compat old versions nuxt
const addComponent = async (opts: AddComponentOptions): Promise<void> => {
  const result = baseAddComponent(opts) as void | Promise<void>;

  if (isPromise(result)) {
    await result;
  }
};

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

    const exclude = ['Editor'];

    try {
      logger.info('Check `chart.js` installation');
      await import('chart.js');
      logger.info('`chart.js` is installed. Add...');
    } catch (_) {
      logger.info('`chart.js` not installed. Skip...');
      exclude.push('Chart');
    }

    await installModule('nuxt-primevue', {
      options: {
        unstyled: true,
        ripple: false
      },
      components: {
        prefix: options.prefix,
        include: '*',
        exclude
      },
      directives: {
        prefix: options.prefix ? `${options.prefix.toLowerCase()}-` : undefined,
        include: '*'
      },
      importPT: { from: resolve('runtime/presets/bootstrap5/passthrough') }
    });

    const components = await globby(resolve('runtime/components', '**', '*.vue'));
    const ignoreComponents = ['ToastMessage'];
    const customComponents = ['buttongroup', 'calendar', 'panelmenu', 'toast', 'datatable', 'dropdown', 'paginator'];

    const typesDir = resolve(nuxt.options.buildDir, 'components.d.ts');

    let overrideItems: any[];

    const typesTemplate = addTemplate({
      filename: 'nuxt-primevue-bootstrap5/types.d.ts',
      getContents: () => `export * from '../${pathe.relative(nuxt.options.buildDir, resolve('runtime/types'))}'`
    });

    await generateComponentTypes(nuxt, `runtime/presets/bootstrap5/**/types.d.ts`);

    // Bug: not visible toast when cached vite
    Object.assign(
      nuxt.options,
      defu(nuxt.options, {
        vite: {
          optimizeDeps: {
            exclude: ['primevue']
          }
        }
      })
    );

    nuxt.options.alias['#nuxt-primevue-bootstrap5/types'] = typesTemplate.dst.replace('.d.ts', '');
    nuxt.options.alias['#nuxt-primevue-bootstrap5/bootstrap5'] = './nuxt-primevue-bootstrap5/bootstrap5';
    nuxt.options.alias['#nuxt-primevue-bootstrap5/bootstrap5/*'] = './nuxt-primevue-bootstrap5/bootstrap5/*';

    for (const component of components) {
      const { name } = pathe.parse(component);

      if (!ignoreComponents.includes(name)) {
        await addComponent({
          name: `${options.prefix}${name}`,
          filePath: component,
          priority: 10
        });
      }
    }

    nuxt.hook('components:extend', (components) => {
      const getShortName = (component: (typeof components)[number]) => component.kebabName.split('-').slice(1).join('');

      overrideItems = components
        .filter((component) => {
          if (component.filePath.startsWith('primevue/')) return true;

          if (!component.filePath.includes(resolve())) return false;

          return customComponents.includes(getShortName(component));
        })
        .map((component) => {
          const filePath = component.filePath.startsWith('primevue/')
            ? component.filePath
            : pathe.relative(nuxt.options.buildDir, component.filePath);

          const shortName = getShortName(component);

          const oldImport = RegExp(`import\\(["']${filePath}["']\\)\\['default']`, 'g');

          return [oldImport, `import("#nuxt-primevue-bootstrap5/bootstrap5/${shortName}")['default']`];
        });
    });

    nuxt.hook('app:templatesGenerated', async (app) => {
      let content = await fsp.readFile(typesDir).then((b) => b.toString());
      overrideItems.forEach(([oldImport, newImport]) => {
        content = content.replace(oldImport, newImport);
      });

      await fsp.writeFile(typesDir, content);
    });

    addImportsDir(resolve('runtime/composables'));

    logger.success('Setup end');
  }
});
