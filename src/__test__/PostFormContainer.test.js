import React from "react";
import { shallow } from "enzyme";
import PostFormContainer from "../containers/PostFormContainer";
import FieldTitleCategory from "../components/FieldTitleCategory";
import FieldBodyAuthor from "../components/FieldBodyAuthor";

const setup = () => {
  const action = {
    onSubmit: jest.fn()
  };

  const component = shallow(<PostFormContainer {...action} />);

  return {
    component: component,
    action: action,
    form: component.find("form"),
    field1: component.find(FieldTitleCategory),
    field2: component.find(FieldBodyAuthor)
  };
};

describe("<App/>", () => {
  it("should rende  two <FormGroup>", () => {
    const { form } = setup();
    expect(form.length).toEqual(1);
  });

  it("should fr ", () => {
    const { form } = setup();
    form.simulate("submit");
    expect();
  });
});
