# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Allure_Reporting\230_Login.spec.ts >> Verify that the login works
- Location: tests\05_Allure_Reporting\230_Login.spec.ts:4:1

# Error details

```
TimeoutError: page.waitForURL: Timeout 15000ms exceeded.
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
        - generic [ref=e13]:
          - img [ref=e15]
          - generic [ref=e18]: Your email, password, IP address or location did not match
        - list [ref=e21]:
          - listitem [ref=e22]:
            - textbox "Email address" [ref=e24]:
              - /placeholder: Enter email ID
              - text: opg73@singleuseemail.site
          - listitem [ref=e25]:
            - generic [ref=e26]:
              - textbox "Password" [ref=e27]:
                - /placeholder: Enter password
              - button "Toggle password visibility" [ref=e28] [cursor=pointer]:
                - img [ref=e29]
          - listitem [ref=e31]:
            - button "Forgot Password?" [ref=e32] [cursor=pointer]
          - listitem [ref=e33]:
            - iframe [ref=e37]
          - listitem [ref=e38]:
            - generic [ref=e40] [cursor=pointer]:
              - generic [ref=e41]: Remember me
              - img [ref=e43]
          - listitem [ref=e45]:
            - button "Sign in" [active] [ref=e46] [cursor=pointer]:
              - generic [ref=e47]: Sign in
          - listitem [ref=e48]:
            - heading "Or" [level=6] [ref=e50]
          - listitem [ref=e52]:
            - button "Sign in with Google" [ref=e54] [cursor=pointer]:
              - generic [ref=e55]:
                - img [ref=e56]
                - generic [ref=e58]: Sign in with Google
          - listitem [ref=e60]:
            - button "Sign in using SSO" [ref=e61] [cursor=pointer]:
              - img [ref=e62]
              - generic [ref=e64]: Sign in using SSO
          - listitem [ref=e65]:
            - button "Sign in with Passkey" [ref=e66] [cursor=pointer]:
              - img [ref=e67]
              - generic [ref=e69]: Sign in with Passkey
          - listitem [ref=e70]:
            - generic [ref=e72]: New to VWO?
          - listitem [ref=e74]:
            - link "Start a FREE TRIAL" [ref=e75] [cursor=pointer]:
              - /url: https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage
              - generic [ref=e76]: Start a FREE TRIAL
          - listitem [ref=e77]:
            - text: By continuing, you agree to VWO's
            - link "Privacy policy" [ref=e78] [cursor=pointer]:
              - /url: https://vwo.com/privacy-policy/?utm_medium=app&utm_source=login-page&utm_campaign=legal_privacy_login
            - text: "&"
            - link "Terms" [ref=e79] [cursor=pointer]:
              - /url: https://vwo.com/terms/?utm_medium=website&utm_source=login-page&utm_campaign=legal_terms_login
            - text: .
      - generic [ref=e83]:
        - img "Vwo abtasty logo" [ref=e84]
        - generic [ref=e85]:
          - heading "have joined forces to redefine the future of" [level=4] [ref=e86]
          - heading "Digital Experience Optimization" [level=4] [ref=e87]
        - img "Vwo Abtasty Shakehands" [ref=e88]
        - heading "Rest assured, your day-to-day workflow, support team, and account contacts remain exactly the same. We are growing to serve you better." [level=5] [ref=e89]
  - img [ref=e90]:
    - generic:
      - img
  - img [ref=e91]
  - img [ref=e92]
  - img [ref=e93]
  - img [ref=e94]
  - img [ref=e95]
  - img [ref=e96]
  - img [ref=e97]
  - img [ref=e98]
  - img [ref=e99]
  - img [ref=e100]
  - img [ref=e101]
  - img [ref=e102]
  - img [ref=e103]
  - img [ref=e104]
  - img [ref=e105]
  - img [ref=e106]
  - img [ref=e107]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import * as allure from "allure-js-commons";
  3  | 
  4  | test('Verify that the login works', async ({ page }) => {
  5  | 
  6  |     await allure.epic("VWO Login Tests");
  7  |     await allure.description("Verify that the login is page works")
  8  |     await allure.feature("Essential features");
  9  |     await allure.story("Authentication");
  10 | 
  11 | 
  12 |     await page.goto("https://app.vwo.com/#login");
  13 |     await page.waitForTimeout(2000);
  14 | 
  15 |     await page.fill("#login-username", "opg73@singleuseemail.site");
  16 |     await page.fill("#login-password", "Wingify@4321");
  17 |     await page.waitForTimeout(1500);
  18 | 
  19 |     await page.click("#js-login-btn");
  20 | 
  21 |     // Wait for login to actually complete before snapshotting storage —
  22 |     // otherwise the auth cookie isn't set yet and the saved state is empty.
> 23 |     await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });
     |                ^ TimeoutError: page.waitForURL: Timeout 15000ms exceeded.
  24 |     await page.waitForTimeout(3000);
  25 |     await expect(page).toHaveTitle("Dashboard");
  26 | 
  27 | 
  28 | });
```