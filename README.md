# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @williamkemeny/lotide`

**Require it:**

`const _ = require('@williamkemeny/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* [assertArraysEqual.js](/assertArraysEqual.js): assertArraysEqual will take in two arrays & compare two object & console.log an appropriate message to the console.
* [assertEqual.js](/assertEqual.js): The function compare the two values it takes in and print out a message telling us if they match or not
* [assertObjectsEqual.js](/assertObjectsEqual.js): The function which takes two parameters, the object, and the expected object, and returns a pass or fail depending on if expected === actual.
* [countLetters.js](/countLetters.js): A function that accepts a string of characters. It then returns an object with a tally of characters
* [countOnly.js](/countOnly.js): Function that takes items and returns counts for a specific subset of those items
* [eqArrays.js](/eqArrays.js): A function that compares two arrays. Returns true or false, based on a perfect match.
* [eqObjects.js](/eqObjects.js): A function which compares two objects to see if both objects have identical keys with identical values.
* [findKey.js](/findKey.js): A function that scans the object and return the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
* [findByKeyValue.js](/findKeyByValue.js): A function that searches for a key on an object where its value matches a given value.
* [flatten.js](/flatten.js): A function that flattens an array of arrays into a single-level array
* [head.js](/head.js): This funcyion returns the first element of an array.
* [letterPositions.js](/letterPositions.js): A function that accepts a string of characters. It then returns an object with an array for each character present
* [map.js](/map.js): A function that creates a new array with the results of calling a provided function on every element in the calling array
* [middle.js](/middle.js): A function that accepts an array, and returns the middle index value(s) in a new array
* [tail.js](/tail.js): A function which accepts an array as an argument, and returns the tail of the array
* [takeUntil.js](/takeUntil.js): This function returns a slice of the array with elements taken from the beginning
* [without.js](/without.js): A function that removes elements from an array.


