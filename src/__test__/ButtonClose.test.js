import React from "react";
import { shallow } from "enzyme";
import ButtonClose from "../components/ButtonClose";

const setup = toggle => {
  const action = {
    toggle: jest.fn()
  };
  const component = shallow(<ButtonClose {...action} />);

  return {
    component: component,
    action: action,
    button: component.find("button")
  };
};

describe("<ButtonClose/>", () => {
  it("should rende  Button", () => {
    const { button } = setup();
    expect(button.type()).toEqual("button");
  });

  it("should click ", () => {
    const { button, action } = setup();
    button.simulate("click");
    expect(action.toggle).toBeCalled();
  });

  it("should component Snapshot", () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
