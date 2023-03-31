// See at https://viblo.asia/p/nang-cao-chat-luong-code-va-hieu-qua-lam-viec-nhom-voi-husky-lint-staged-commitlint-4dbZNnMnZYM
// Example: https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional
module.exports = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"type-enum": [
			2,
			"always",
			["build", "chore", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test", "enhances"],
		],
	},
};
