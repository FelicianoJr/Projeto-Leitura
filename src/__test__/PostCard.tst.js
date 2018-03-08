// import React from "react";
// import { shallow } from "enzyme";
// import PostCard from "../components/PostCard";
// import CardBodyMain from "../components/CardBodyMain";

// const setup = (comments = [], post) => {
//   const actions = {
//     toggle: jest.fn(),
//     toggleComment: jest.fn()
//   };

//   const component = shallow(
//     <PostCard {...actions} comments={comments} post={post} />
//   );

//   return {
//     component: component,
//     actions: actions,
//     cardBodyMain: component.find(CardBodyMain),
//   };
// };

// describe("<PostCard/>", () => {
//   it("should rende  <card>", () => {
//     const { component } = setup();
//     expect(component.props().className).toBe("card");
//   });

//   it("should render Post", () => {
//     const postProps = {
//       title: "test post",
//       body: "Hi there! I am a POST.",
//       author: "two"
//     };

//     const { cardBodyMain } = setup([], postProps);
//     expect(cardBodyMain.props().data).toEqual({
//       title: "test post",
//       body: "Hi there! I am a POST.",
//       author: "two"
//     });
//   });

//   it("should render  two <CommmentCard/>", () => {
//     const commentsProps = [
//       {
//         id:"dsds09",
//         body: "Hi there! I am a COMMENT1.",
//         author: "thingtwo"
//       },
//       {
//         id:"dsds",
//         body: "Hi there! I am a COMMENT2.",
//         author: "thingtwo"
//       },
//     ];
//     //const { commentCard } = setup(commentsProps);
//     //expect(commentCard.length).toEqual(2);
//   });
// });
