# Manual Test Cases - TheMealDB

## Test Case 001: Search meal by valid name (Positive)

**Test ID:** TC_001

**Feature:** Search

**Precondition:** TheMealDB website is accessible

**Steps:**
1. Open https://www.themealdb.com/
2. Enter a valid meal name in the search box
3. Press "Enter"

**Expected Result:**
- Relevant meal results are displayed
- Meal name and image are visible

**Actual Result**
- Meal results are displayed
- Meal name and image are visible

**Status: Pass**

## Test Case 002: Search meal with invalid name (Negative)

**Test ID:** TC_002

**Feature:** Search

**Precondition:** TheMealDB website is accessible

**Steps:**
1. Open https://www.themealdb.com/
2. Enter an inavlid meal name in the search box
3. Press "Enter"

**Expected Result:**
- No meal results are displayed
- Application handles empty results very well

**Actual Result**
- Meal results are not displayed
- No meal name and image is shown
- A message stating "No meals found" is displayed on the page

**Status: Pass**

## Test Case 003: Search meal with ingredients

**TestID:** TC_003

**Feature:** Search

**Preconditions:** The MealDB is accessible

**Steps:**
1. Open https://www.themealdb.com/
2. Enter an ingredient in the search box
3. Press "Enter"

**Expected Result:**
- Meals containing the ingredient are displayed (by name or content)
- Meal name and image are visible
- Application handles empty results gracefully if no meal matches

**Actual Result:**
- Meals containing the ingredient in the name are displayed correctly
- Meal names and images are visible
- A message stating "No meals found" is displayed on the page when there is no match

**Status:** Pass
