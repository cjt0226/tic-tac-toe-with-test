import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Game from "./Game";

describe("Game", () => {
  it("should show the default Board", () => {
     //Arrange
    const tree = render(<Game />);
    //Act
    //Assert
    expect(tree).toMatchSnapshot();
    screen.debug();
  });
});
