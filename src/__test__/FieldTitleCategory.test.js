import React from "react";
import { shallow } from "enzyme";
import FieldTitleCategory from "../components/FieldTitleCategory";

const setup = () => {
  const component = shallow(<FieldTitleCategory />);

  return {
    component: component,
    formGroup: component.find(".form-group"),
    label: component.find("label"),
    input: component.find("Field")
  };
};

describe("<FieldTitleCategory/>", () => {

  it("should rende  two <FormGroup>", () => {
    const { formGroup } = setup();
    expect(formGroup.length).toEqual(2);
  });

  it("should rende two <Label> ", () => {
    const { label } = setup();
    expect(label.at(0).text()).toEqual("Titulo");
    expect(label.at(1).text()).toEqual("Categoria");
  });

  it("should rende two length input ", () => {
    const { input } = setup();
    expect(input.length).toEqual(2);
  });
});
