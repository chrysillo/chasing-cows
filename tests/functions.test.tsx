import { describe, expect, test } from 'vitest';
import { countHerds } from '../src/functions';

describe("Cows and herds", () => {
  test("should be counted correctly", () => {
    const cowField1 = [
      [0, 1, 0, 0, 0],
      [1, 1, 0, 0, 1],
      [0, 0, 0, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 0, 0, 0],
    ];

    const { cows, herds } = countHerds(cowField1);

    expect(cows).toBe(9);
    expect(herds).toBe(3);
  })
})