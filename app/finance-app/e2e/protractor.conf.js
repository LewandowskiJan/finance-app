/* eslint-disable @typescript-eslint/no-empty-function */
// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

import { SpecReporter, StacktraceOption } from "jasmine-spec-reporter";

export const config = {
  allScriptsTimeout: 11000,
  specs: ["./src/**/*.e2e-spec.ts"],
  capabilities: {
    browserName: "chrome",
  },
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: "http://localhost:4200/",
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    print: function () {},
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onPrepare() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("ts-node").register({
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      project: require("path").join(__dirname, "./tsconfig.json"),
    });
    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: StacktraceOption.PRETTY,
        },
      })
    );
  },
};
