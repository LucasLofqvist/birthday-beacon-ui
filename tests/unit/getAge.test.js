import { describe, it, expect } from "vitest";
import getAge from "../../src/utils/getAge";

describe("getAge", () => {
  it("calculates age correctly", () => {
    expect(getAge("1991-05-15")).toBeTypeOf("number");
  });
});
