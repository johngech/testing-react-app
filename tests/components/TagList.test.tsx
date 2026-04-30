import { render, screen, waitFor } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import TagList from "../../src/components/TagList";

describe("TagList", () => {
  it("should render tags", async () => {
    render(<TagList />);

    // To test asynchronous code we can use the following options
    // Option 1:
    await waitFor(() => {
      const listitem = screen.getAllByRole("listitem");
      expect(listitem.length).toBeGreaterThan(0);
    });

    /**
     * 
    Option2: 
    // const listitem = await screen.findAllByRole("listitem");
    // expect(listitem.length).toBeGreaterThan(0);
     * 
     */
  });
});
