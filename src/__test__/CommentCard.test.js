// import React from "react";
// import { shallow } from "enzyme";
// import CommentCard from "../components/CommentCard";
// import CardBodyMain from "../components/CardBodyMain";

// const setup = comment => {
//   const actions = {
//     toggleComment: jest.fn()
//   };

//   const component = shallow(<CommentCard {...actions} comment={comment} />);

//   return {
//     component: component,
//     actions: actions,
//     cardBodyMain: component.find(CardBodyMain)
//   };
// };

// describe("<CommentCard/>", () => {

//   it("should rende <card>", () => {
//     const { component } = setup();
//     expect(component.props().className).toBe("card");
//   });

//   it("should render comment", () => {
//     const commentProps = {
//       body: "Hi there! I am a COMMENT.",
//       author: "thingtwo"
//     };

//     const { cardBodyMain } = setup(commentProps);
//     expect(cardBodyMain.props().data).toEqual({
//       body: "Hi there! I am a COMMENT.",
//       author: "thingtwo"
//     });
//   });
// });
