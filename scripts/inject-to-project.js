#!/usr/bin/env node

import { promises as fsp } from 'node:fs';
import * as npath from 'node:path';
import { fileURLToPath } from 'node:url';
import { read } from 'rc9';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

(async () => {
  /** @type {{ injectToProject: { dir: string[] } }} */
  const config = read(npath.resolve(__dirname, '.confrc'));

  const fromRootPath = (...args) => {
    const rootPath = new URL('../', import.meta.url).pathname;
    return npath.join(rootPath, ...args);
  };

  const pkg = await fsp
    .readFile(fromRootPath('package.json'))
    .then((buf) => JSON.parse(buf.toString()))
    .catch(() => ({ name: 'nuxt-primevue-bootstrap5' }));

  const fileAndDirPaths = {
    'package.json': {
      content: JSON.stringify(
        {
          ...pkg,
          exports: {
            ...pkg.exports,
            '.': {
              import: './dist/module.ts',
              require: './dist/module.ts',
              types: './dist/module.ts'
            }
          },
          main: './dist/module.ts',
          module: './dist/module.ts',
          types: './dist/module.ts'
        },
        null,
        2
      )
    },
    'dist/module.ts': {
      path: fromRootPath('src/module.ts'),
      method: 'link'
    },
    'dist/runtime': {
      path: fromRootPath('src/runtime'),
      method: 'symlink'
    },
    scss: {
      path: fromRootPath('scss'),
      method: 'symlink'
    },
    LICENSE: {
      path: fromRootPath('LICENSE'),
      method: 'symlink'
    }
  };

  for (const projectPath of config.injectToProject.dir) {
    const fromProjectPath = (...args) => {
      const isNodeModulesEnd = /node_modules/.test(projectPath);

      const paths = [projectPath, isNodeModulesEnd ? null : 'node_modules', ...args].filter(Boolean);

      return npath.join(...paths);
    };

    const symbolicPath = fromProjectPath(pkg.name);
    const symbolicDistPath = fromProjectPath(pkg.name, 'dist');

    await fsp.rm(symbolicPath, { recursive: true, force: true });
    await fsp.mkdir(symbolicDistPath, { recursive: true });

    await Promise.all(
      Object.entries(fileAndDirPaths).map(async ([name, item]) => {
        const symbPath = fromProjectPath(pkg.name, name);

        if (item.content) {
          await fsp.writeFile(symbPath, item.content);
        } else {
          await fsp[item.method](item.path, symbPath);
        }
      })
    );

    console.log(`All contents is symlinked in "${symbolicPath}"`);
  }
})()
  .then(() => {
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
