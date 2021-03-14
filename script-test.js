/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const shell = require('shelljs');

console.log('Olá Mundo');

const resultado = shell.exec('git diff --name-only adicao_modal..main', { silent: true });

console.log('Arquivos:', resultado.stdout.split('\n'));
