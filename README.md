# Learn Playwright Fundamentals

A comprehensive Playwright learning project for browser automation with TypeScript. This repository contains structured test examples covering basic concepts, advanced locators, context management, session handling, and real-world test scenarios.

## Project Structure

```
tests/
├── 01_Basics/               # Basic Playwright concepts
│   ├── Lab209.spec.ts
│   └── Lab210_Test_Annoations.spec.ts
├── 02_First_tests/          # First practical test examples
│   ├── 211_First_running_test.spec.ts
│   ├── 212_Context_Browser_Page.spec.ts
│   ├── 213_Multiple_context.spec.ts
│   ├── 214_Multi_page.spec.ts
│   ├── 215_TEST_PW.spec.ts
│   ├── 216_Manual_Context.spec.ts
│   ├── 217_Manual_Context_Options.spec.ts
│   └── 218_Context_Reuse.spec.ts
├── 03_Locators_Commands/    # Locator strategies and commands
│   ├── 219_Commands.spec.ts
│   ├── 221_Reffer_Command.spec.ts
│   ├── 222_Automation.vwo.com.spec.ts
│   ├── 223_Xpath.spec.ts
│   ├── 224_GetRole.spec.ts
│   ├── 225_CSS_Locators.spec.ts
│   ├── 226_PressSequentially.spec.ts
│   └── 227_Cookie.spec.ts
├── 04_Session_Storage/      # Session and storage management
│   ├── 228_Session.spec.ts
│   └── 229.TestVWo.spec.ts
├── Task/                    # Real-world test scenarios
│   ├── Task1/              # Multi-context and multi-page scenarios
│   ├── Task2/              # Katalon Cura login test
│   ├── Task3/              # VWO invalid login test
│   └── Task4/              # VWO application test
└── 220_GotoCommands.spec.ts # Navigation commands
```

## Setup

Install dependencies:

```bash
npm install
```

This installs:
- `@playwright/test` - Playwright testing framework
- `tsx` - TypeScript executor for running TypeScript files directly

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run specific test file
```bash
npx playwright test tests/01_Basics/Lab209.spec.ts
```

### Run tests with headed mode (see browser)
```bash
npx playwright test --headed
```

### Run tests in specific directory
```bash
npx playwright test tests/02_First_tests/
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Execute TypeScript scripts directly
```bash
npx tsx tests/04_Session_Storage/228_Session.spec.ts
```

## Test Categories

### 01 - Basics
Introduction to Playwright fundamentals and test annotations.

### 02 - First Tests
Practical examples of browser, context, and page management with single browser instances.

### 03 - Locators & Commands
Advanced locator strategies including:
- CSS selectors
- XPath expressions
- Role-based locators
- Commands and interactions

### 04 - Session Storage
Session management and state persistence across browser instances.

### Tasks
Real-world testing scenarios:
- **Task 1**: Multi-browser/context/page scenarios
- **Task 2**: Katalon Cura application login tests
- **Task 3**: VWO application invalid login tests
- **Task 4**: VWO application comprehensive tests

## Configuration

- `playwright.config.ts` - Playwright configuration settings
- `tsconfig.json` - TypeScript compiler options
- `.gitignore` - Version control exclusions

## Local Artifacts (Ignored)

The following are automatically ignored and not pushed to the repository:
- `.vscode/` - VS Code settings
- `node_modules/` - Dependencies
- `/test-results/` - Test execution results
- `/playwright-report/` - HTML test reports
- `user-session.json` - Browser session state

## Technologies

- **Playwright**: Modern browser automation framework
- **TypeScript**: Strongly typed JavaScript
- **Node.js**: JavaScript runtime

## Usage Notes

- Tests are structured in numbered folders for progressive learning
- Each test file demonstrates specific Playwright features
- Real application testing against VWO and Katalon Cura
- Session state can be saved and reused across test runs
