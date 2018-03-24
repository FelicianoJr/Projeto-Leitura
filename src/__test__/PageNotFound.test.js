import React from "react";
import { shallow } from "enzyme";
import PageNotFound from "../components/PageNotFound";

const setup = data => {
  const component = shallow(<PageNotFound />);

  return {
    component: component,
    display: component.find(".display-4"),
    lead: component.find(".lead")
  };
};

describe("<PageNotFound />", () => {
  it("should render alert", () => {
    const { display, lead } = setup();
    expect(display.text()).toEqual("Oops, :(");
    expect(lead.text()).toEqual("Postagem não encontrada!");
  });

  it("snapshot  a PageNotFound", () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
