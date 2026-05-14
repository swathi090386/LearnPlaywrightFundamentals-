# QA Project - Customer Report Test

This project contains QA profile tests for the `https://app.thetestingacademy.com/playwright/tables/practice` practice page.

## What is included

- `Project_QA.spec.ts`
  - QA profile form submission with full profile details
  - Grid Hub profile submission with a second scenario
  - Customer Report profile submission with explicit screenshot and video attachment

## Reporting and Artifacts

The project is configured in `playwright.config.ts` to capture:

- `screenshot: 'on'`
- `video: 'on'`
- `trace: 'on'`
- custom reporter: `./CustomTTAReporter.ts`
- HTML and Allure reporting

## Generated files

The following artifacts are produced when the test runs:

- `test-results/QA_Profile_Submission.png`
- `test-results/Grid_Hub_Profile.png`
- `test-results/Customer_Report_Profile.png`
- `test-results/Customer_Report_Profile.webm`

## How to run

```bash
npx playwright test tests/Projects/Project_QA/Project_QA.spec.ts
```

## Verify reports

- For the Playwright HTML report:
  ```bash
  npx playwright show-report
  ```

- For Allure reports:
  ```bash
  allure serve allure-results
  ```

## Notes

- The customer report test attaches the screenshot and video as test artifacts for easier review.
- All required tracing and artifact capture options are enabled in the Playwright config.
