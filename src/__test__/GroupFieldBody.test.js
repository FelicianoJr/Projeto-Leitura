import React from "react";
import { shallow } from "enzyme";
import GroupFieldBody from "../components/GroupFieldBody";

const setup = () => {
  const component = shallow(<GroupFieldBody />);

  return {
    component: component,
    formGroup: component.find(".form-group"),
    label: component.find("label"),
    input: component.find("Field")
  };
};

describe("<GroupFieldBody/>", () => {
  it("should rende  <Form>", () => {
    const { formGroup } = setup();
    expect(formGroup.length).toEqual(2);
  });

  it("should rende  <Label> ", () => {
    const { label } = setup();
    expect(label.at(0).text()).toEqual("Autor");
    expect(label.at(1).text()).toEqual("Descrição");
  });

  it("should rende  <Label> ", () => {
    const { input } = setup();
    expect(input.length).toEqual(2);
  });

  it("should component Snapshot", () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
