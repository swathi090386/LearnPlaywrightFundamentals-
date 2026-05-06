# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Allure_Reporting\230_Login.spec.ts >> Verify that the login works
- Location: tests\05_Allure_Reporting\230_Login.spec.ts:10:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - main "Application main content" [ref=e3]:
    - generic [ref=e7]:
      - generic [ref=e10]:
        - img "VWO" [ref=e12]
        - paragraph [ref=e13]: Sign in to VWO platform
        - list [ref=e16]:
          - listitem [ref=e17]:
            - generic [ref=e18] [cursor=pointer]: Email address
            - textbox "Email address" [ref=e20]:
              - /placeholder: Enter email ID
              - text: opg73@singleuseemail.site
          - listitem [ref=e21]:
            - generic [ref=e22] [cursor=pointer]: Password
            - generic [ref=e23]:
              - textbox "Password" [ref=e24]:
                - /placeholder: Enter password
                - text: Wingify@4321
              - button "Toggle password visibility" [ref=e25] [cursor=pointer]:
                - img [ref=e26]
          - listitem [ref=e27]:
            - button "Forgot Password?" [ref=e28] [cursor=pointer]
          - listitem [ref=e29]:
            - generic [ref=e31] [cursor=pointer]:
              - generic [ref=e32]: Remember me
              - img [ref=e34]
          - listitem [ref=e35]:
            - button "Sign in" [active]:
              - generic: Sign in
          - listitem [ref=e36]:
            - heading "Or" [level=6] [ref=e38]
          - listitem [ref=e40]:
            - button "Sign in with Google" [ref=e42] [cursor=pointer]:
              - generic [ref=e43]:
                - img [ref=e44]
                - generic [ref=e45]: Sign in with Google
          - listitem [ref=e47]:
            - button "Sign in using SSO" [ref=e48] [cursor=pointer]:
              - img [ref=e49]
              - generic [ref=e50]: Sign in using SSO
          - listitem [ref=e51]:
            - button "Sign in with Passkey" [ref=e52] [cursor=pointer]:
              - img [ref=e53]
              - generic [ref=e54]: Sign in with Passkey
          - listitem [ref=e55]:
            - text: Don't have an account?
            - link "Start a free trial" [ref=e56] [cursor=pointer]:
              - /url: https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage
          - listitem [ref=e57]:
            - text: By continuing, you agree to VWO's
            - link "Privacy policy" [ref=e58] [cursor=pointer]:
              - /url: https://vwo.com/privacy-policy/?utm_medium=app&utm_source=login-page&utm_campaign=legal_privacy_login
            - text: "&"
            - link "Terms" [ref=e59] [cursor=pointer]:
              - /url: https://vwo.com/terms/?utm_medium=website&utm_source=login-page&utm_campaign=legal_terms_login
            - text: .
      - generic [ref=e63]:
        - img "Vwo abtasty logo" [ref=e64]
        - generic [ref=e65]:
          - heading "have joined forces to redefine the future of" [level=4] [ref=e66]
          - heading "Digital Experience Optimization" [level=4] [ref=e67]
        - img "Vwo Abtasty Shakehands" [ref=e68]
        - heading "Rest assured, your day-to-day workflow, support team, and account contacts remain exactly the same. We are growing to serve you better." [level=5] [ref=e69]
  - generic:
    - generic:
      - iframe
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import * as allure from "allure-js-commons";
  3  | 
  4  | test.use({
  5  |     screenshot: 'on',
  6  |     video: 'on',
  7  |     trace: 'on',
  8  | });
  9  | 
  10 | test('Verify that the login works', async ({ page }) => {
  11 | 
  12 |     await allure.epic("VWO Login Tests");
  13 |     await allure.description("Verify that the login is page works")
  14 |     await allure.feature("Essential features");
  15 |     await allure.story("Authentication");
  16 | 
  17 | 
  18 |     await page.goto("https://app.vwo.com/#login");
  19 |     await page.waitForTimeout(2000);
  20 | 
  21 |     await page.fill("#login-username", "opg73@singleuseemail.site");
  22 |     await page.fill("#login-password", "Wingify@4321");
  23 |     await page.waitForTimeout(1500);
  24 | 
  25 |     await page.click("#js-login-btn");
  26 | 
  27 |     // Wait for login to actually complete before snapshotting storage —
  28 |     // otherwise the auth cookie isn't set yet and the saved state is empty.
> 29 |     await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });
     |                ^ Error: page.waitForURL: Test timeout of 30000ms exceeded.
  30 |     await page.waitForTimeout(3000);
  31 |     await expect(page).toHaveTitle("Dashboard");
  32 | 
  33 | 
  34 | });
```