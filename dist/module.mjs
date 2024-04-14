import { defineNuxtModule, useLogger, createResolver, installModule, addComponent } from '@nuxt/kit';
import { promises } from 'node:fs';
import { globby } from 'globby';
import { relative, parse } from 'pathe';

const PACKAGE_NAME = "primevue-bootstrap-nuxt";
const module = defineNuxtModule({
  meta: {
    name: PACKAGE_NAME,
    configKey: "primevueBootstrap",
    compatibility: {
      nuxt: "^3.0.0"
    }
  },
  defaults: {
    prefix: "B"
  },
  async setup(options, nuxt) {
    const logger = useLogger(PACKAGE_NAME);
    const { resolve } = createResolver(import.meta.url);
    await installModule("nuxt-primevue", {
      options: {
        unstyled: true,
        ripple: false
      },
      components: {
        prefix: options.prefix,
        include: "*"
      },
      importPT: { from: resolve("runtime/presets/bootstrap5/passthrough") }
    });
    const components = await globby(resolve("runtime/components", "**", "*.vue"));
    const typesDir = resolve(nuxt.options.buildDir, "components.d.ts");
    let overrideItems;
    nuxt.hook("components:extend", async (components2) => {
      overrideItems = components2.filter((component) => component.filePath.startsWith("primevue/")).map((component) => {
        const shortName = component.kebabName.split("-").slice(1).join("");
        const fullPath = resolve(`runtime/presets/bootstrap5/${shortName}/types`);
        const relativePath = relative(nuxt.options.buildDir, fullPath);
        return [component.filePath, relativePath];
      });
    });
    nuxt.hook("app:templatesGenerated", async (app) => {
      let content = await promises.readFile(typesDir).then((b) => b.toString());
      overrideItems.forEach(([name, path]) => {
        content = content.replace(RegExp(`['"]${name}['"]`, "g"), `"${path}"`);
      });
      await promises.writeFile(typesDir, content);
    });
    for (const component of components) {
      const { name } = parse(component);
      await addComponent({
        name: `${options.prefix}${name}`,
        filePath: component,
        priority: 10
      });
    }
    logger.success("Setup end");
  }
});

export { module as default };
