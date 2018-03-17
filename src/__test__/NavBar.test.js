import React from "react";
import { shallow } from "enzyme";
import Navbar from "../components/NavBar";
import { NavLink } from "react-router-dom";

const setup = (categories = [], disabled) => {
  const actions = {
    newPost: jest.fn(),
    sortPost: jest.fn()
  };

  const component = shallow(
    <Navbar {...actions} categories={categories} disabled={disabled} />
  );

  return {
    component: component,
    actions: actions,
    button: component.find("button"),
    select: component.find("select"),
    option: component.find("option"),
    navLink: component.find(NavLink)
  };
};

describe("<NavBar/>", () => {
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

  it("should render equal text <option>", () => {
    const { select } = setup();
    const option = select.find("option");
    expect(option.at(0).text()).toEqual("Maior Pontuação");
    expect(option.at(1).text()).toEqual("Menor Pontuação");
    expect(option.at(2).text()).toEqual("Postagens Recentes");
    expect(option.at(3).text()).toEqual("Postagens Antigas");
  });

  it("should call in select sortPost", () => {
    const { actions, select } = setup();
    select.simulate("change", { target: { value: "100" } });
    expect(actions.sortPost).toBeCalled();
  });

  it("should rende NavLink", () => {
    const { navLink } = setup(categories);
    expect(navLink.at(2).props().to).toEqual("/react");
    expect(navLink.at(3).props().to).toEqual("/redux");
  });

  it("should click newPost", () => {
    const { button, actions } = setup();
    button.simulate("click");
    expect(actions.newPost).toBeCalled();
  });

  it("shold component snapshot", () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
//example change value
// const wrapper = shallow(<Login />);
//    wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'cats'}});

//    expect(wrapper.state('password')).toEqual('cats');
//   })
