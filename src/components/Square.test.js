import React from "react";
import { render, screen } from "@testing-library/react";
import Square from "./Square";
describe("Square",()=>{
    it("Should show the text",()=>{
        //Arrange
        render(<Square value="test_value"/>);
        //Act
        //Assert
        expect(screen.getByRole('button')).toMatchSnapshot();
        // screen.debug(screen.getByRole('button'));
    });
});