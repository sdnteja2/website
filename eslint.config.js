import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  vue: true,
  overrides: [
    {
      files: ['*.md'],
      rules: {
        'prettier/prettier': 'off', // Matikan pemformatan otomatis oleh Prettier
        'markdownlint': 'off', // Matikan aturan markdown linting jika aktif
      },
    },
  ],
})
