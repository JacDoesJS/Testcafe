module.exports = {
  REPORTER_CONFIG_FILE: './allure.config.js',
  CATEGORIES_CONFIG_FILE: './allure-categories.config.js',

  RESULT_DIR: './allure/allure-results',
  REPORT_DIR: './allure/allure-report',
  SCREENSHOT_DIR: './allure/screenshots',

  CLEAN_RESULT_DIR: true,
  CLEAN_REPORT_DIR: true,
  CLEAN_SCREENSHOT_DIR: true,

  ENABLE_SCREENSHOTS: true,
  ENABLE_QUARANTINE: false,
  ENABLE_LOGGING: false,
  CONCURRENCY: 1,

  META: {
    SEVERITY: 'Normal',
    PRIORITY: 'Medium',
    JIRA_URL: 'https://jira.example.nl/browse/',
  },
  LABEL: {
    ISSUE: 'JIRA Test Case',
    EPIC: 'JIRA Epic',
    STORY: 'JIRA User Story',
    FLAKY: 'Flaky test',
    SCREENSHOT_MANUAL: 'Screenshot taken manually',
    SCREENSHOT_ON_FAIL: 'Screenshot taken on fail',
    DEFAULT_STEP_NAME: 'Test Step',
  },
};
And, the defaults for allure-categories.config.js are the following:

module.exports = [
  {
    name: 'Ignored tests',
    matchedStatuses: [Status.SKIPPED],
  },
  {
    name: 'Product defects',
    matchedStatuses: [Status.FAILED],
    messageRegex: '.*Assertion failed.*',
  },
  {
    name: 'Test defects',
    matchedStatuses: [Status.FAILED],
  },
  {
    name: 'Warnings',
    matchedStatuses: [Status.PASSED],
    messageRegex: '.*Warning.*',
  },
  {
    name: 'Flaky tests',
    matchedStatuses: [Status.PASSED, Status.FAILED],
    messageRegex: '.*Flaky.*',
  },
];