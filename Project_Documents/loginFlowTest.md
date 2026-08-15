# Test Script: Happy Path — Login \& Team Page

**Feature tested:** Full happy path from login through to team page rendering
**Environment:** Live deployed URL
**Tester:** James Eustice
**Date:** 15/08/2026

## Test 1 — Valid login

1. Navigate to the live site's sign-in page.
2. Enter valid and correct credentials for an existing account.
3. Submit the form.

**Expected result:** Login succeeds.

**Actual result:** PASS

## Test 2 — Redirect after login

1. Immediately after Test 1's successful login.

**Expected result:** User is automatically redirected to the team page.

**Actual result:** PASS

## Test 3 — Member cards render correctly

1. On the team page, inspect each member card.

**Expected result:** Every card displays a photo, role, and blurb (bio text) with no missing fields or layout errors.

**Actual result:** PASS

## Test 4 — Expand on long text

1. Find a member card with a long blurb that appears truncated.
2. Click to expand it.

**Expected result:** The full blurb text expands and displays correctly without breaking the card layout.

**Actual result:** PASS

