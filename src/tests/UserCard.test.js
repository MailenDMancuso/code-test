import React from "react";
import { render, screen } from "@testing-library/react";
import UserCard from "../UserCard";

describe("User Card component", () => {
  test("not display user's card", () => {
    render(
      <UserCard
        user={undefined}
        isEditingUser={false}
        onClick={() => {}}
        onSave={() => {}}
        onCancelEditing={() => {}}
      />
    );

    const userDetailsCard = screen.queryByTestId("user-details-card");
    expect(userDetailsCard).not.toBeInTheDocument();
  });

  test("displays user's card", () => {
    const user = {
      id: {
        name: "userId",
        value: "1",
      },
      name: {
        title: "user title",
        first: "first",
        last: "last",
      },
      email: "testingemail@test.com",
      phone: "123456677",
      location: {
        city: "city",
        country: "country",
      },
      picture: {
        medium: "medium",
      },
      login: {
        uuid: "uuid",
      },
    };

    render(
      <UserCard
        user={user}
        isEditingUser={false}
        onClick={() => {}}
        onSave={() => {}}
        onCancelEditing={() => {}}
      />
    );
    const userEmail = screen.getByText("testingemail@test.com");
    expect(userEmail).toBeInTheDocument();
    const userDetailsCard = screen.queryByTestId("user-details-card");
    expect(userDetailsCard).toBeInTheDocument();
  });
});
