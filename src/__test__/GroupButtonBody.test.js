import React from "react";
import { shallow } from "enzyme";
import GroupButtonBody from "../components/GroupButtonBody";

const setup = () => {
  const action = {
    edit: jest.fn(),
    remove: jest.fn(),
    voteUp: jest.fn(),
    voteDown: jest.fn()
  };

  const component = shallow(<GroupButtonBody  {...action} />);

  return {
    component: component,
    action: action,
    button: component.find("button")
  };
};

describe("<GroupButtonBody>", () => {
  it("should rende 4 buttons", () => {
    const { button } = setup();
    expect(button.length).toEqual(4);
  });

  it("should simulate click edit", () => {
    const { button, action } = setup();
    expect(button.at(0).type()).toEqual("button");
    button.at(0).simulate("click");
    expect(action.edit).toBeCalled();
  });

  it("should simulate click remove", () => {
    const { button, action } = setup();
    expect(button.at(1).type()).toEqual("button");
    button.at(1).simulate("click");
    expect(action.remove).toBeCalled();
  });

  it("should simulate click voteUp", () => {
    const { button, action } = setup();
    expect(button.at(2).type()).toEqual("button");
    button.at(2).simulate("click");
    expect(action.voteUp).toBeCalled();
  });

  it("should simulate click voteDown", () => {
    const { button, action } = setup({ commentCount: 2 });
    expect(button.at(3).type()).toEqual("button");
    button.at(3).simulate("click");
    expect(action.voteDown).toBeCalled();
  });

  it("should component Snapshot", () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
