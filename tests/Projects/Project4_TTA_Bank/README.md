# Project4 TTA Bank Money Withdraw Test

This test file `Project4_TTA_Bank_Money_Withdraw.spec.ts` verifies the money withdrawal functionality in the TTA Bank application.

## Test Description
- **Test Name**: Check If Balance is reflected after withdraw
- **Purpose**: Ensures that after transferring funds (withdrawing money), the balance is correctly updated on the dashboard.

## Custom Reporter Integration
The test uses the custom TTA Reporter configured in `playwright.config.ts`. The reporter provides real-time updates and generates detailed HTML reports.

## Test Results
- **Passed**: 2 out of 3 runs (Chromium and another browser)
- **Failed**: 1 run (timed out in Firefox after 30s)

## Screenshots
Below is a screenshot of the custom TTA Reporter output for this test run:

![Custom TTA Reporter Screenshot](vscode-chat-response-resource://7673636f64652d636861742d73657373696f6e3a2f2f6c6f63616c2f4e6a597a4d6a55774d474974596a4e684e79303059574d7a4c574930596a51744d54466b596a566c4e6a55334f446c6d/tool/call_26961653/0/file.jpe)

## Verification
The custom reporter was verified by:
- Running the test and observing the real-time console output.
- Generating and viewing the HTML report.
- Confirming that the report includes test steps, durations, and status for each browser.

## How to Run
```bash
npx playwright test "tests/Projects/Project4_TTA_Bank/Project4_TTA_Bank_Money_Withdraw.spec.ts"
```

## Report
View the latest report:
```bash
npx playwright show-report
```

For the custom TTA report, open `tta-report/report_YYYYMMDD_HHMMSS.html` in a browser.