import React from "react";
import { shallow } from "enzyme";
import PageNotFounds from "../components/PageNotFound";

const setup = () => {
  const component = shallow(<PageNotFounds />);

  return {
    component: component,
    h1: component.find("h1"),
    p: component.find("p")
  };
};

describe("<PageNotFounds/>", () => {
  it("should rende  h1", () => {
    const { h1 ,p} = setup();
    expect(h1.text()).toEqual("Erro 404");
    expect(p.text()).toEqual("Página não encontrada!");
    
  });

  it("should component Snapshot", () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
