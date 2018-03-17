import React from "react";
import { shallow } from "enzyme";
import GroupFieldTitle from "../components/GroupFieldTitle";

const setup = (categories = []) => {
  const component = shallow(<GroupFieldTitle categories={categories} />);

  return {
    component: component,
    formGroup: component.find(".form-group"),
    label: component.find("label"),
    input: component.find("Field")
  };
};

describe("<GroupFieldTitle/>", () => {
  let categories;
  beforeEach(() => {
    categories = [
      {
        name: "react",
        path: "react"
      },
      {
        name: "redux",
        path: "redux"
      }
    ];
  });

  it("should rende  two <FormGroup>", () => {
    const { formGroup } = setup();
    expect(formGroup.length).toEqual(2);
  });

  it("should rende two <Label> ", () => {
    const { label } = setup();
    expect(label.at(0).text()).toEqual("Titulo");
    expect(label.at(1).text()).toEqual("Categoria");
  });

  it("should rende 2 length input ", () => {
    const { input, component } = setup();
    expect(input.length).toEqual(2);
  });

  it("should rende 2 length input ", () => {
    const { input } = setup(categories);
    expect(input.find("option").length).toEqual(3);
  });

  it("should component Snapshot ", () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
