# Test Plan

## Project Overview 
This document outlines the test plan for TheMealDB web application (https://www.themealdb.com/).  
The goal is to verify that core functionalities, including searching for recipes, viewing details, and browsing categories, work as expected and provide a good user experience.

## Test Objectives
- Validate core user flows -> searching meals, browsing categories, viewing meal details
- Identity functional and UI issues -> Do buttons work? Do images load? Are there no broken pages? 
- Ensure basic usability and reliability -> Can anyone use it easily? Does it behave consistently?

## Scope of Testing 
### In Scope 
This refers to stuff to be tested by me
- Navigation (menu, categories, home links)
- Search functionality (search meals by name or ingredient)
- Meal detail pages (ingredients, instructions, images)
- Error messages or empty search results

### Out of Scope
This means stuff I won't be bothering to test for now because it is beyond my beginner knowledge. 
- Performance testing (load times, speed)
- Security testing
- Browser/device compability beyond Chrome and macOS/Windows

## Test Approach
- Manuel functional testing -> Click around, verify features work
- Exploratory testing -> Play around and see if anything breaks unexpectedly
- Regression testing for critical flows -> Re-test important features after any updates 
It is how I plan to test

## Test Environment 
Broswer: Chrome
Operating Systems: macOS / Windows
Test Type: Manuel 
This is where the testing happens

## Entry & Exit Criteria
### Entry Criteria
- TheMealDB website is accessible
- Test environment is stable

### Exit Criteria
- All planned test cases executed
- Critical bugs documented