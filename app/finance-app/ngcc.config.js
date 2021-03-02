module.exports = {
  packages: {
    '@rx-angular': {
      entryPoints: {
        '.': {
          ignoreMissingDependencies: true,
        },
        'angular': {
          override: {
            main: './index.js',
            typings: './index.d.ts',
          },
          ignoreMissingDependencies: true,
        },
      },
    },
  },
};
