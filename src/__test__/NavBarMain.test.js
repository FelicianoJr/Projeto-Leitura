import React from "react";
import { shallow } from "enzyme";
import NavbarMain from "../components/NavBarMain";

const setup = (categories = []) => {
  const actions = {
    newPost: jest.fn(),
    sortPost: jest.fn(),
    pushRoute: jest.fn()
  };

  const component = shallow(
    <NavbarMain {...actions} categories={categories} />
  );

  return {
    component: component,
    actions: actions,
    button: component.find("button"),
    select: component.find("select"),
    option: component.find("option"),
    a: component.find("a")
  };
};

describe("<NavBarMain/>", () => {
  it("should render equal text <option>", () => {
    const category = [
      {
        name: "react",
        path: "react"
      },
      {
        name: "redux",
        path: "redux"
      }
    ];
    const { option } = setup(category);
    expect(option.at(0).text()).toEqual("Escolha uma categoria");
    expect(option.at(1).text()).toEqual("react");
    expect(option.at(2).text()).toEqual("redux");
  });

  it("should call sortPost", () => {
    const { actions, select } = setup();
    select.at(1).simulate("change", { target: { value: "100" } });
    expect(actions.sortPost).toBeCalled();
  });

  it("should call PushRoute", () => {
    const { actions, select, component } = setup();
    select.at(0).simulate("change", { target: { value: "100" } });
    expect(actions.pushRoute).toBeCalled();
  });

  it("should button toggle", () => {
    const { button, actions } = setup();
    button.simulate("click");
    expect(actions.newPost).toBeCalled();
  });

  it("shold render one <a>", () => {
    const { a } = setup();
    expect(a.length).toEqual(1);
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
