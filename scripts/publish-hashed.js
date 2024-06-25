#!/usr/bin/env node

import { promises as fsp } from 'node:fs';
import * as npath from 'node:path';
import { fileURLToPath } from 'node:url';
import { read } from 'rc9';
import { $, execa } from 'execa';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

(async () => {
  /** @type {{ npm: { authToken: string } }} */
  const { npm: { authToken } = {} } = read(npath.resolve(__dirname, '.confrc'));

  const fromRootPath = (...args) => {
    const rootPath = new URL('../', import.meta.url).pathname;
    return npath.join(rootPath, ...args);
  };

  const pkgPath = fromRootPath('package.json');

  const pkg = await fsp.readFile(pkgPath).then((buf) => JSON.parse(buf.toString()));
  const shallowClonedPkg = { ...pkg };

  const { stdout: gitHash } = await $`git rev-parse --short HEAD`;

  if (!authToken) throw new Error('Не указан токен для деплоя');

  shallowClonedPkg.version = `${pkg.version}-${gitHash}`;

  await fsp.writeFile(pkgPath, JSON.stringify(shallowClonedPkg, null, 2));

  await execa('pnpm', ['publish', '--no-git-checks'], {
    stdio: 'inherit',
    env: {
      NPM_TOKEN: authToken
    }
  });

  await fsp.writeFile(pkgPath, JSON.stringify(pkg, null, 2));

  console.log('DONE!');
})()
  .then(() => {
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
