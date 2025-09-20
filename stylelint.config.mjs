/* @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"], /// в конце нужно добавить -scss если скачан он
  rules: {
    'number-leading-zero': 'always',
  }
}