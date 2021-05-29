# Contributors

[Commit prefixes](#commit-prefixes)

## Commit & changelog

### Commit

```

<type>(<scope>): <message> <issue-ticket>
    <type>:
        - <message>
        - <message>
    <type>:
        - <message>
        - <message>

```

##### for example

```

fix(finance-app): fixed tests for some module #10

```

or for __multi line__

```

feat(finance-app): some new features, refactors, fixes #10
    feat:
        - new api service
        - error handling
    fix:
        - banner paddings
        - typos
    reactor:
        - request method

```

#### Types

- chore: updating gulp tasks etc.; no production code change
- docs: changes to documentation
- feat: a new feature for the user, not a new feature for a build script
- fix: bug fix for the user, not a fix to a build scripts
- perf: code improved in terms of processing performance
- refactor: refactoring production code
- style: formatting, missing semicolons, etc.; no code change
- test: adding missing tests, refactoring tests; no production code change
- other (e.g. vendor: update version for dependencies, packages.)

#### Scopes

- finance-app
