import React from "react";
import { shallow } from "enzyme";
import GroupButtonModal from "../components/GroupButtonModal";

const setup = (pristine, submitting) => {
  const action = {
    toggle: jest.fn()
  };
  const component = shallow(
    <GroupButtonModal {...action} pristine={pristine} submitting={submitting} />
  );

  return {
    component: component,
    action: action,
    button: component.find("button")
  };
};

describe("<GroupButtonModal/>", () => {
  it("should rende  Button", () => {
    const { button } = setup();
    expect(button.length).toEqual(2);
  });

  it("should click Button toggle", () => {
    const { button, action } = setup();
    button.at(0).simulate("click");
    expect(action.toggle).toBeCalled();
  });

  it("should rende disabled when True", () => {
    const { button } = setup(true, false);
    expect(button.at(1).prop("disabled")).toEqual(true);
  });

  it("should rende disabled when false", () => {
    const { button } = setup(false, false);
    expect(button.at(1).prop("disabled")).toEqual(false);
  });

  it("should component Snapshot", () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
