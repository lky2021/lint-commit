// commitlint.config.cjs
module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 可选：自定义规则，例如放宽 scope 限制、允许 emoji 等
  rules: {
    // 'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert', 'perf']],
    // 'subject-case': [0] // 允许 subject 大小写自由
  },
}
