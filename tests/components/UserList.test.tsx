import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("UserList", () => {
  it("should render no users when array is empty", () => {
    render(<UserList users={[]} />);

    const text = screen.getByText(/no users/i);

    expect(text).toBeInTheDocument();
  });

  it("should render a list of users", () => {
    const users: User[] = [
      { id: 1, name: "Alemu" },
      { id: 2, name: "Kebede" },
    ];

    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.queryByRole("link", { name: user.name });

      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(user.name);
    });
  });
});
