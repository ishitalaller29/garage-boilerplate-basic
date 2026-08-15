# Test Script: Edge Cases — Login \& Team Page

**Feature tested:** Edge cases around login and team page rendering
**Environment:** Live deployed URL
**Tester:** James Eustice
**Date:** 15/08/2026

## Test 1 — Invalid login

1. Navigate to the live site's sign-in page.
2. Enter incorrect credentials.
3. Submit the form.

**Expected result:** Login is denied and an error message is shown.

**Actual result:** PASS

## Test 2 — Direct team-page URL access without login

1. Without logging in/or after logging out, manually enter the team page URL directly into the browser.
2. Press Enter to navigate.

**Expected result:** User is redirected back to the sign-in page and cannot view the team page content.

**Actual result:** PASS

## Test 3 — Missing-photo member

1. On the team page, locate a member whose profile has no photo uploaded.

**Expected result:** A fallback/placeholder image displays in place of the missing photo, with no broken image icon or layout shift.

**Actual result:** PASS

## Test 4 — Unusually long bio

1. On the team page, locate a member with a long bio.

**Expected result:** The long text is truncated with an expand option.

**Actual result:** PASS

