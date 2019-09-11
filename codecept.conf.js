exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://www.google.com',
      browser: 'chrome',
      waitForTimeout: 5000,
      smartWait: 5000
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    allure: {
      enabled: true
    },
    stepByStepReport:{
      enabled: true,
      deleteSuccessful: false,
      uniqueScreenshotNames: true,
      screenshotsForAllureReport: true
    }
},
  tests: './*_test.js',
  screenshotOnFail: {
    enabled: true,
    uniqueScreenshotNames: true,
    fullPageScreenshots: true
  },
  name: 'codecept-web',
  translation: 'pt-BR'
}