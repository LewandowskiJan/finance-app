# Contributors

[Commit prefixes](#commit-prefixes)

## Commit & changelog

### Changelog types

chore: updating gulp tasks etc.; no production code change
docs: changes to documentation
feat: a new feature for the user, not a new feature for a build script
fix: bug fix for the user, not a fix to a build scripts
perf: code improved in terms of processing performance
refactor: refactoring production code
style: formatting, missing semicolons, etc.; no code change
test: adding missing tests, refactoring tests; no production code change
other (e.g. vendor: update version for dependencies, packages.)
breaking
build
ci
revert

## Changelog generating

```

type(category): description [flags]

```

[docs](https://www.npmjs.com/package/generate-changelog)

```

$ changelog generate

```
