import { expect, test } from 'vitest';
import { difference, intersection, union } from '../index';

// numbers
const oddNumbersLessThanTen = [1, 3, 5, 7, 9];
const evenNumbersLessThanTen = [2, 4, 6, 8, 10];
const primeNumbersLessThanTen = [2, 3, 5, 7];

// employees
const companyA = ['ram', 'hari', 'sita'];
const companyB = ['hari', 'shyam', 'lakshmi', 'sita'];
const companyC = ['shyam', 'hari', 'john'];

test('testing difference between odd and prime', () => {
  const diffBetweenOddAndPrimeNumbersLessThanTen = difference(
    oddNumbersLessThanTen,
    primeNumbersLessThanTen
  );
  expect(diffBetweenOddAndPrimeNumbersLessThanTen).toStrictEqual([1, 9]);
  expect(diffBetweenOddAndPrimeNumbersLessThanTen).not.toStrictEqual([2]);
});

test('testing difference between companyA and companyB', () => {
  const diffBetComAAndComB = difference(companyA, companyB);
  expect(diffBetComAAndComB).toStrictEqual(['ram']);
  expect(diffBetComAAndComB).not.toStrictEqual(['sita']);
});

test('testing intersection between odd numbers and prime numbers less than 10', () => {
  const interBetwOddAndPrime = intersection(
    oddNumbersLessThanTen,
    primeNumbersLessThanTen
  );
  expect(interBetwOddAndPrime).not.toStrictEqual([1]);
  expect(interBetwOddAndPrime).toStrictEqual([3, 5, 7]);
});

test('testing intersection between even and prime numbers less than 10', () => {
  const interBetwEvenAndPrime = intersection(
    evenNumbersLessThanTen,
    primeNumbersLessThanTen
  );
  expect(interBetwEvenAndPrime).toStrictEqual([2]);
});

test('testing intersection between company A and company C', () => {
  const interComAAndComC = intersection(companyA, companyC);
  expect(interComAAndComC).toStrictEqual(['hari']);
});

test('union between odd and even number less than 10', () => {
  const uni = union(oddNumbersLessThanTen, evenNumbersLessThanTen);
  expect(uni).toStrictEqual([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]);
});

test('union between company B and company C', () => {
  const uni = union(companyB, companyC);
  expect(uni).toStrictEqual(['hari', 'shyam', 'lakshmi', 'sita', 'john']);
});
