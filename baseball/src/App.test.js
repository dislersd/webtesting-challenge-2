import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent, cleanup} from "react-testing-library";
import 'jest-dom/extend-expect'
import Dashboard from "./components/Dashboard";

afterEach(cleanup)

describe("<App/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders successfully", () => {
    render(<App />);
  })

  describe("Methods", () => {
    describe("Strikes", () => {
      it("increments strikes by 1", () => {
        const { getByText, debug} = render(<App />);
        const button = getByText(/strike/i)
        fireEvent.click(button)
        debug();
        getByText(/strikes: 1/i)
      })
      it("strikes go to zero", () => {
        const { getByText, debug} = render(<App />);
        const button = getByText(/strike/i)
        fireEvent.click(button)
        fireEvent.click(button)
        fireEvent.click(button)
        getByText(/strikes: 0/i)
      })
      it("strikes go to two", () => {
        const { getByText, debug} = render(<App />);
        const button = getByText(/strike/i)
        fireEvent.click(button)
        fireEvent.click(button)
        getByText(/strikes: 2/i)
      })
      it("click fires an event", () => {
        const onClick = jest.fn();
        const { getByText } = render(<Dashboard strike={onClick} />);
        fireEvent.click(getByText(/strike/i))
        expect(onClick).toHaveBeenCalled();
      })
    })
    describe("Balls", () => {
      it("increments ball count", () => {
      })
    })
    describe("Foul", () => {

    })
    describe("Hit", () => {

    })
  })
});
