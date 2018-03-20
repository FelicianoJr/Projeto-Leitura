import React from "react";
import { shallow } from "enzyme";
import GroupButtonFooter from "../components/GroupButtonFooter";
import { Link } from "react-router-dom";

const setup = (post = {}) => {
  const action = {
    newComment: jest.fn()
  };
  const component = shallow(<GroupButtonFooter {...action} post={post} />);

  return {
    component: component,
    action: action,
    button: component.find("button"),
    link: component.find(Link),
    span:component.find("span")
  };
};

describe("<GroupButtonFooter/>", () => {
  let post;
  beforeEach(() => {
    post = {
      id: "rer455",
      category: "react",
      commentCount: 2
    };
  });

  it("should rende  Button", () => {
    const { button } = setup(post);
    expect(button.type()).toEqual("button");
  });

  it("should rende Link", () => {
    const { link } = setup(post);
    expect(link.props().to).toEqual("/react/rer455");
  });

  it("should rende span count 2",()=>{
    const {span} = setup(post);
    expect(span.text()).toEqual("2")
  })

  it("should click newComment ", () => {
    const { button, action } = setup(post);
    button.simulate("click");
    expect(action.newComment).toBeCalled();
  });

  it("should component Snapshot", () => {
    const { component } = setup(post);
    expect(component).toMatchSnapshot();
  });
});
