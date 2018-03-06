// import React from "react";
// import { shallow } from "enzyme";
// import SelectSort from "../components/SelectSort";

// const setup = () => {
//   const actions = {
//     onSortPost: jest.fn()
//   };

//   const component = shallow(<SelectSort {...actions} />);

//   return {
//     component: component,
//     actions: actions,
//     select: component.find("select"),
//     option: component.find("option")
//   };
// };

// describe("<SelectSort/>", () => {
//   it("should render one select", () => {
//     const { select } = setup();
//     expect(select.length).toEqual(1);
//   });

//   it("should render five <option>", () => {
//     const { option } = setup();
//     expect(option.length).toEqual(5);
//   });

//   it("should call onSortPost", () => {
//     const { actions, select } = setup();
//     select.simulate("change", { target: { value: "100" } });
//     expect(actions.onSortPost).toHaveBeenCalledTimes(1);
//   });
// });
