# Manual Test Cases - TheMealDB

## Test Case 001: Search meal by valid name

**Test ID:** TC_001
**Feature:** Search
**Precondition:** TheMealDB website is accessible

**Steps:**
1. Open https://www.themealdb.com/
2. Enter a valid meal name -> Cinnamon buns
3. Click the search button

**Expected Result:**
- Relevant meal results are displayed
- Meal name and image are visible

**Actual Result**
- Meal results are displayed
- Meal name and image are visible

**Status: Pass**

## Test Case 002: Search meal with invalid name

**Test ID:** TC_002
**Feature:** Search
**Precondition:** TheMealDB website is accessible

**Steps:**
1. Open https://www.themealdb.com/
2. Enter an inavlid meal name -> Jollof rice
3. Click the search button

**Expected Result:**
- No meal results are displayed
- Application handles empty results very well

**Actual Result**
- Meal results are not displayed
- No meal name and image is shown
- A message stating "No meals found" is displayed on the page

**Status: Pass**

