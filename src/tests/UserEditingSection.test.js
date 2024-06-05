import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserEditingSection from "../components/UserEditingSection";

describe("User Editing Section", () => {
  test("send form values", () => {
    const mockUser = {
      id: {
        value: "value",
      },
      email: "email@test.com",
      phone: "1234",
    };
    const mockSaveFn = jest.fn();
    const mockCancelFn = jest.fn();

    render(
      <UserEditingSection
        user={mockUser}
        onSave={mockSaveFn}
        onCalcenEditing={mockCancelFn}
      />
    );

    const inputEmail = screen.getByTestId("email-input");
    const inputPhone = screen.getByTestId("phone-input");
    const submitButton = screen.getByTestId("submit-button");

    userEvent.clear(inputEmail);
    userEvent.clear(inputPhone);
    expect(inputEmail).toHaveValue("");
    expect(inputPhone).toHaveValue("");

    userEvent.type(inputEmail, mockUser.email);
    userEvent.type(inputPhone, mockUser.phone);
    expect(inputEmail).toHaveValue(mockUser.email);
    expect(inputPhone).toHaveValue(mockUser.phone);

    userEvent.click(submitButton);
    const returnedData = mockSaveFn.mock.calls[0][0];
    expect(mockSaveFn).toBeCalledTimes(1);
    expect(returnedData).toMatchObject(mockUser);
  });
});
