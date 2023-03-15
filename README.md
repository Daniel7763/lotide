# Lotide

A mini clone of the [Lodash](https://lodash.com) library, A modern JavaScript utility library delivering modularity, performance & extras.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @daniel7763/lotide`

**Require it:**

`const _ = require('@daniel7763/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:



* assertArraysEqual(...): asserts that two arrays are equal, console log results.
* assertEqual(...): checks if two strings are equal.
* assertObjectsEqual(...): asserts if two objects are equal.
* countLetters(...): count the number of letters in a string and make an object with the characters listed without spaces.
* countOnly(...): return a number tally for a specified character.
* eqArrays(...): compares arrays for a match. returns true or false.
* eqObjects(...): compares two objects for a match. returns true or false.
* findKey(...): scans an object and returns the first key for which the callback returns a truthy.
* findKeyByValue(...): returns a key from an object when provided with a value as an argument.
* flatten(...): takes multiple arrays and pushes them to one array.
* head(...): returns the first element in an array.
* letterPositions(...): takes in a string and returns that letters first position in an array.
* map(...): makes a copy of an array.
* middle(...): returns the middle most values in an array.
* tail(...): returns all elements in an array except for the first element.
* takeUntil(...): Loops through an array until a charcter or word is found.
* without(...): returns an array without the input values.














