// import React from "react";
// import { shallow } from "enzyme";
// import StandardGroupButton from "../components/StandardGroupButton";

// const setup = () => {
//   const actions = {
//     onEdit: jest.fn(),
//     onDelete: jest.fn(),
//     toggle: jest.fn(),
//     onVote: jest.fn(),
//   };
//   const component = shallow(<StandardGroupButton {...actions} />);
//   return {
//     component: component,
//     actions: actions,
//     buttons: component.find("button")
//   };
// };

// describe("<StandardGroupButton/>", () => {
//   it("should call button Edit", () => {
//     const { buttons, actions } = setup();
//     buttons
//       .hostNodes()
//       .at(0)
//       .simulate("click");
//     expect(actions.onEdit).toBeCalled();
//     expect(actions.toggle).toBeCalled();
//   });

//   it("should call button delete", () => {
//     const { buttons, actions } = setup();
//     buttons
//       .hostNodes()
//       .at(1)
//       .simulate("click");
//     expect(actions.onDelete).toBeCalled();
//   });

//     // it("should call button Like", () => {
//     //   const { buttons, actions } = setup();
//     //   console.log(buttons
//     //     .hostNodes()
//     //     .at(2).props())
//     //   buttons
//     //     .hostNodes()
//     //     .at(2)
//     //     .simulate("click");
//     //   expect(actions.onVote).toBeCalled();
//     // });

//   //   it("should call button Dislike", () => {
//   //     const { buttons, actions } = setup();
//   //     buttons
//   //       .hostNodes()
//   //       .at(3)
//   //       .simulate("click");
//   //     expect(actions.onVote).toBeCalled();
//   //   });
// });
