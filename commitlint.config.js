module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [2, "always", ["build", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test", "dev"]],
    },
    parserPreset: {
        parserOpts: {
            headerPattern: /^(\w*)\(([\w-]*)\)!?:\s(add|fix|update|test|change|remove|panic|develop|close)\s([a-z0-9\s-#@.-_]*)$/,
            headerCorrespondence: ["type", "ticket", "subjectprefix", "subject"],
        },
    },
};
