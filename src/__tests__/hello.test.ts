import { expect, test } from 'vitest';
import { getHelloWorld } from '../index';

test('testing hello', () => {
  expect(getHelloWorld()).not.toBe('Hello');
  expect(getHelloWorld()).toBe('hello, world');
});
