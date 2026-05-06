# Custom TTA Reporter Setup Guide

## Overview

The **Custom TTA Reporter** (`CustomTTAReporter.ts`) is a custom HTML reporter built for the Playwright automation framework that provides:

- ✅ Real-time test execution reporting
- 📊 Detailed test statistics and pass rates
- 📸 Screenshot capture and display
- 🎥 Video recording and playback
- 📡 Trace file collection
- 📋 Step-by-step test execution logs
- 🎭 Professional HTML report with live updates

## Configuration

### 1. Playwright Config Setup

The `playwright.config.ts` file has been configured with the custom reporter:

```typescript
reporter: [
  ['html'],
  ["allure-playwright"],
  ['./CustomTTAReporter.ts']  // ← Custom TTA Reporter
]
```

### 2. Global Capture Settings

Screenshots, videos, and traces are enabled globally in `playwright.config.ts`:

```typescript
use: {
  screenshot: 'on',     // Capture screenshots for all tests
  video: 'on',          // Record video for all tests
  trace: 'on',          // Collect trace files
  headless: false,      // Run in headed mode for visibility
}
```

### 3. Test-Level Configuration

Individual tests can also have capture settings:

```typescript
test.use({
  screenshot: 'on',
  video: 'on',
  trace: 'on',
});
```

Example: `tests/05_Allure_Reporting/230_Login.spec.ts`

## Running Tests

### Run All Tests
```bash
npm test
# or
npx playwright test
```

### Run Specific Test File
```bash
npx playwright test tests/05_Allure_Reporting/230_Login.spec.ts
```

### Run in Headed Mode
```bash
npx playwright test --headed
```

### Run in Debug Mode
```bash
npx playwright test --debug
```

## Output Artifacts

After running tests, the following directories are created:

### 1. **TTA Custom Report** (Main Report)
- **Location**: `tta-report/`
- **Files**:
  - `index.html` - Redirects to latest report
  - `report_YYYYMMDD_HHMMSS.html` - Generated reports
  - `history.html` - Report history and previous runs
  - `screenshots/` - Test screenshots
  - `videos/` - Test videos
  - `traces/` - Trace files

### 2. **Test Results**
- **Location**: `test-results/`
- Contains screenshots, videos, and traces organized by test

### 3. **Playwright HTML Report**
- **Location**: `playwright-report/`
- Standard Playwright HTML report

### 4. **Allure Report**
- **Location**: `allure-report/`
- Allure-specific reporting format

## Opening the Custom TTA Report

### Option 1: Open Latest Report
```bash
start tta-report/index.html
```

### Option 2: Open Specific Report
```bash
start tta-report/report_20260505_143022.html
```

### Option 3: View Report History
```bash
start tta-report/history.html
```

## What the Custom Reporter Captures

### 📊 Dashboard Section
- Total tests count
- Passed/Failed/Skipped test counts
- Pass rate percentage
- Total execution duration
- Browser and platform information
- Environment details
- Run ID and timestamp

### 🧪 Test Table
For each test, the report displays:
- Test name and suite
- Test file location
- Start and end times
- Execution duration
- Test status (✅ Passed, ❌ Failed, ⏭️ Skipped)
- Links to screenshots, videos, and traces

### 🔍 Test Details (Expandable)
Click on any test to expand details:

#### Errors Section
- Full error message
- Call stack trace

#### Test Steps Section
- Step-by-step execution breakdown
- Each step shows:
  - Step name and duration
  - Console output
  - Screenshots per step
  - Error information
  - Stack traces

#### Screenshots Section
- Thumbnail gallery of all test screenshots
- Click to view full resolution

#### Videos Section
- Embedded video player
- Play/pause/download controls

#### Traces Section
- Download trace files for debugging in Playwright Inspector

## Example Test: 230_Login.spec.ts

### Configuration
```typescript
import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";

test.use({
  screenshot: 'on',
  video: 'on',
  trace: 'on',
});

test('Verify that the login works', async ({ page }) => {
  await allure.epic("VWO Login Tests");
  await allure.feature("Essential features");
  // ... test code ...
});
```

### What Gets Captured
1. ✅ Full video of the login process
2. 📸 Screenshots at each step
3. 📡 Trace for debugging browser interactions
4. 📋 Console logs from test execution

## Features of Custom TTA Reporter

### Real-Time Updates
- Report updates every 5 seconds during test execution
- No need to wait for all tests to complete to see progress

### Live Statistics
```
╔════════════════════════════════════════════════════════════════╗
║        🎭 TTA PLAYWRIGHT AUTOMATION - REAL-TIME REPORT         ║
╠════════════════════════════════════════════════════════════════╣
║  📅 Started: 5/5/2026, 2:30:22 PM                             ║
║  📊 Total Tests: 12                                            ║
║  🌐 Environment: UAT                                           ║
╚════════════════════════════════════════════════════════════════╝
```

### Summary Output
```
╔════════════════════════════════════════════════════════════════╗
║                    📊 FINAL TEST SUMMARY                        ║
╠════════════════════════════════════════════════════════════════╣
║  ✅ Passed:  10                                                ║
║  ❌ Failed:  1                                                 ║
║  ⏭️  Skipped: 1                                                ║
║  📊 Total:   12                                                ║
╠════════════════════════════════════════════════════════════════╣
║  ⏱️  Duration: 2m 45s                                           ║
║  📈 Pass Rate: 83.3%                                           ║
╚════════════════════════════════════════════════════════════════╝
```

### Console Logging
During test execution, you'll see real-time output:
```
▶️  STARTING: Verify that the login works
   📁 File: 230_Login.spec.ts
   📍 Suite: VWO Login Tests
   ─────────────────────────────────────────────────────
   ⏳ Navigate to login page...
   ✅ Navigate to login page... (125ms)
   ⏳ Enter username and password...
   ✅ Enter username and password... (89ms)
   ⏳ Click login button...
   ✅ Click login button... (256ms)
   ─────────────────────────────────────────────────────
   ✅ RESULT: PASSED | Duration: 2s
```

## Report File Structure

```
tta-report/
├── index.html                           # Latest report redirect
├── report_20260505_143022.html          # Main report (with timestamp)
├── report_20260505_134521.html          # Previous run
├── history.html                         # All report history
├── screenshots/
│   ├── screenshot_1_1.png
│   ├── screenshot_1_2.png
│   ├── screenshot_2_1.png
│   └── ...
├── videos/
│   ├── video_1.webm
│   ├── video_2.webm
│   └── ...
└── traces/
    ├── trace_1.zip
    ├── trace_2.zip
    └── ...
```

## Filtering and Navigation in Report

### Filter by Priority
- All
- P0 (Critical)
- P1 (High)
- Smoke

### Filter by Status
- All
- ✅ Passed
- ❌ Failed
- ⏭️ Skipped

## Troubleshooting

### Reporter Not Generating
1. Check `playwright.config.ts` has the reporter configured
2. Run with verbose logging: `npx playwright test --debug`
3. Verify `CustomTTAReporter.ts` file exists and has no TypeScript errors

### Missing Screenshots/Videos
1. Ensure `screenshot: 'on'` and `video: 'on'` are set in config
2. Check `test-results/` directory exists
3. Verify browser has permission to write files

### Report Not Updating in Real-Time
- This is normal if tests run very quickly
- Report still updates with final results after all tests complete

## TypeScript Compilation

To verify the custom reporter compiles without errors:

```bash
npx tsc --noEmit -p .
```

## Next Steps

1. ✅ Run tests: `npm test`
2. 📂 Open report: `start tta-report/index.html`
3. 📊 View results with screenshots and videos
4. 🔍 Expand test details to see step-by-step execution
5. 📥 Download traces for debugging

## Additional Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright Reporters](https://playwright.dev/docs/test-reporters)
- [Custom Reporters Guide](https://playwright.dev/docs/test-reporters#custom-reporters)

---

**Author**: Pramod Dutta  
**Website**: https://thetestingacademy.com  
**Framework**: Playwright with Custom TTA Reporter v1.0.0
