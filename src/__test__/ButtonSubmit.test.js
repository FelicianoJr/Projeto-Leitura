import React from "react";
import { shallow } from "enzyme";
import ButtonSubmit from "../components/ButtonSubmit";

const setup = (pristine, submitting) => {
  const component = shallow(
    <ButtonSubmit pristine={pristine} submitting={submitting} />
  );

  return {
    component: component,
    button: component.find("button")
  };
};

describe("<FieldTitleCategory/>", () => {
  it("should rende  Button", () => {
    const { button } = setup();
    expect(button.type()).toEqual("button");
  });

  it("should rende disabled when True", () => {
    const { button } = setup(true, false);
    expect(button.prop("disabled")).toEqual(true);
  });

  it("should rende disabled when false", () => {
    const { button } = setup(false, false);
    expect(button.prop("disabled")).toEqual(false);
  });
});
