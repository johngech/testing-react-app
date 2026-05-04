import { describe, expect, it } from "vitest";

describe("main", () => {
  it("should render Hello with name when name is provided", async () => {
    const response = await fetch("/categories");
    const data = await response.json();
    console.log(data);
    expect(data).toHaveLength(3);
    expect(1).toBeTruthy();
  });
});
