/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options & import('@ianvs/prettier-plugin-sort-imports').PrettierConfig} */
const config = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss', // MUST come last
  ],
  pluginSearchDirs: false,
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/types/(.*)$',
    '^@/config/(.*)$',
    '^@/lib/(.*)$',
    '^@/hooks/(.*)$',
    '^@/components/ui/(.*)$',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
    '^@/app/(.*)$',
    '',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
}

export default config
