# Set Utils

This is a collection of utils related to array of primitive types such as number, string, etc.

## Installation

```bash
npm install @baijanathTharu/set-utils
```

## Usage

```ts
import { difference, intersection, union } from '@baijanathTharu/set-utils';
const oddNumbersLessThanTen = [1, 3, 5, 7, 9];
const evenNumbersLessThanTen = [2, 4, 6, 8, 10];

// difference
const diffBetweenOddAndPrimeNumbersLessThanTen = difference(
  oddNumbersLessThanTen,
  primeNumbersLessThanTen
);

// intersection
const interBetwOddAndPrime = intersection(
  oddNumbersLessThanTen,
  primeNumbersLessThanTen
);

// union
const unionBetwOddAndEven = union(
  oddNumbersLessThanTen,
  evenNumbersLessThanTen
);
```
