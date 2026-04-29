import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { it, expect, describe } from "vitest";
import TermsAndConditions from "../../src/components/TermsAndConditions";

describe("TermsAndConditions", () => {
  it("should render Terms and Conditions with its initial state", () => {
    render(<TermsAndConditions />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Terms & Conditions");

    const paragraph = screen.getByRole("paragraph");

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(/lorem/i);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("should enable the button when the checkbox is checked", async () => {
    render(<TermsAndConditions />);

    const checkbox = screen.getByRole("checkbox");
    const user = userEvent.setup();
    await user.click(checkbox);

    expect(screen.getByRole("button")).toBeEnabled();
  });
});
