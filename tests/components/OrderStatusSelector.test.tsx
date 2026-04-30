import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import OrderStatusSelector from "../../src/components/OrderStatusSelector";
import { Theme } from "@radix-ui/themes";
import userEvent from "@testing-library/user-event";

describe("OrderStatusSelector", () => {
  const onChange = vi.fn();
  const renderOrderStatusSelector = () => {
    render(
      <Theme>
        <OrderStatusSelector onChange={onChange} />
      </Theme>,
    );

    return {
      trigger: screen.getByRole("combobox"),
      getOptions: () => screen.findAllByRole("option"),
      getOption: (label: RegExp) =>
        screen.findByRole("option", { name: label }),
      user: userEvent.setup(),
      onChange,
    };
  };

  it("should render new as a default value", () => {
    const { trigger } = renderOrderStatusSelector();

    expect(trigger).toHaveTextContent(/new/i);
  });

  it("should render the correct statuses", async () => {
    const { trigger: button, getOptions, user } = renderOrderStatusSelector();

    await user.click(button);

    const options = await getOptions();
    expect(options).toHaveLength(3);

    const labels = options.map((option) => option.textContent);

    expect(labels).toEqual(["New", "Processed", "Fulfilled"]);
  });

  it.each([
    { label: /processed/i, value: "processed" },
    { label: /fulfilled/i, value: "fulfilled" },
  ])(
    "should call onChange with fulfilled when the fulfilled option i is selected",
    async ({ label, value }) => {
      const { trigger, onChange, user, getOption } =
        renderOrderStatusSelector();

      await user.click(trigger);

      const option = await getOption(label);

      await user.click(option);

      expect(onChange).toHaveBeenCalledWith(value);
    },
  );

  it("should call onChange with 'new' when the New option is selected", async () => {
    const { trigger, onChange, user, getOption } = renderOrderStatusSelector();

    await user.click(trigger);

    const processedOption = await getOption(/processed/i);

    await user.click(processedOption);

    await user.click(trigger);

    const newOption = await getOption(/new/i);
    
    await user.click(newOption);

    expect(onChange).toHaveBeenCalledWith("new");
  });
});
