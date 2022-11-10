/**
 * This is used to find the difference between two array of primitve types such as string or number.
 */
export function difference<T>(arr1: T[], arr2: T[]): T[] {
  const diff = arr1.filter((ele) => !arr2.includes(ele));

  return diff;
}

/**
 * This is used to find the intersection between two array of primitive types such as number or string.
 */
export function intersection<T>(arr1: T[], arr2: T[]): T[] {
  const inter = arr1.filter((ele) => arr2.includes(ele));

  return inter;
}
