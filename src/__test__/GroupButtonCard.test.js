import React from "react";
import { shallow } from "enzyme";
import GroupButtonCard from "../components/GroupButtonCard";

const setup = data => {
  const action = {
    showComment: jest.fn(),
    newComment: jest.fn(),
    edit: jest.fn(),
    remove: jest.fn(),
    voteUp: jest.fn(),
    voteDown: jest.fn()
  };

  const component = shallow(<GroupButtonCard data={data} {...action} />);

  return {
    component: component,
    action,
    action,
    button: component.find("button")
  };
};

describe("<GroupButtonCard>", () => {
  it("should simulate click showComment", () => {
    const { button, action } = setup({ commentCount: 2 });
    expect(button.at(0).type()).toEqual("button");
    button.at(0).simulate("click");
    expect(action.showComment).toBeCalled();
  });

  it("should simulate click newComment", () => {
    const { button, action } = setup({ commentCount: 2 });
    expect(button.at(1).type()).toEqual("button");
    button.at(1).simulate("click");
    expect(action.newComment).toBeCalled();
  });

  it("should simulate click edit", () => {
    const { button, action } = setup({ commentCount: 2 });
    expect(button.at(2).type()).toEqual("button");
    button.at(2).simulate("click");
    expect(action.edit).toBeCalled();
  });

  it("should simulate click remove", () => {
    const { button, action } = setup({ commentCount: 2 });
    expect(button.at(3).type()).toEqual("button");
    button.at(3).simulate("click");
    expect(action.remove).toBeCalled();
  });

  it("should simulate click voteUp", () => {
    const { button, action } = setup({ commentCount: 2 });
    expect(button.at(4).type()).toEqual("button");
    button.at(4).simulate("click");
    expect(action.voteUp).toBeCalled();
  });

  it("should simulate click voteDown", () => {
    const { button, action } = setup({ commentCount: 2 });
    expect(button.at(5).type()).toEqual("button");
    button.at(5).simulate("click");
    expect(action.voteDown).toBeCalled();
  });

  
});
