import type { UnpluginFactory } from 'unplugin';
import { createVitePlugin } from 'unplugin';
import { codeToHtml } from 'shiki';

const factory: UnpluginFactory<undefined> = () => ({
  name: 'unplugin-doc-macro',
  enforce: 'pre',
  transform: {
    filter: {
      id: {
        include: /components\/.*\.vue$/,
        exclude: /node_modules/
      }
    },
    async handler(code) {
      if (!code.match(/<script.*documentation/)) return;

      let [_match1, scriptRaw] = code.match(/(<script.+<\/script>)/s)!;
      let [_match2, templateRaw] = code.match(/(<template.+<\/template>)/s)!;

      scriptRaw = scriptRaw.replace(/(<script.*?)\s?documentation/, '$1');

      const rawHtml = `
${scriptRaw}

${templateRaw}
`.trim();

      const html = await codeToHtml(rawHtml, {
        lang: 'vue',
        theme: 'light-plus'
      });

      return code
        .replace(
          '</script>',
          `
const Doc = () => h('div', { class: 'shiki-container', innerHTML: \`<div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom"> <small class="font-monospace text-body-secondary text-uppercase">vue</small></div>${html}\` });
</script>
`.trim()
        )
        .replace(
          /<\/template>\n?$/,
          `
<Doc />
</template>
`.trim()
        );
    }
  }
});

export default createVitePlugin(factory);
