import React from "react";
import { render, screen } from "@testing-library/react";
import Square from "./Square";
describe("Square",()=>{
    it("Should show the text",()=>{
        //Arrange
        const tree=render(<Square value="test_value"/>);
        //Act
        //Assert
        expect(tree).toMatchSnapshot();
        // screen.debug(screen.getByRole('button'));
    });
});