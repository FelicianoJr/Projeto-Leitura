import React from "react";
import { shallow } from "enzyme";
import CardBodyMain from "../components/CardBodyMain";

const setup = (data, showPostButton) => {
  const actions = {
    toggle: jest.fn(),
    toggleComment: jest.fn()
  };
  const component = shallow(
    <CardBodyMain {...actions} data={data} showPostButton={showPostButton} />
  );

  return {
    component: component,
    actions: actions,
    divTitle: component.find(".card-title"),
    divBody: component.find(".card-text"),
    badgeScore: component.find(".badge"),
    b: component.find("b"),
  };
};

describe("<CardBodyMain/>", () => {

  const postProps = {
    title: "Udacity",
    body: "new situation",
    voteScore: 4,
    author: "Feliciano",
    timestamp: 142536
  };
  const commentProps = {
    body: "new situation",
    voteScore: 4,
    author: "Feliciano",
    timestamp: 142536
  };

  it("should render {title}", () => {
    const { divTitle, divBody, badgeScore, b } = setup(postProps);
    expect(divTitle.text()).toEqual("Udacity");
    expect(divBody.at(0).text()).toEqual("new situation");
    expect(badgeScore.text()).toEqual("4");
    expect(b.at(1).text()).toEqual("Feliciano");
    expect(b.at(2).text()).toEqual("142536");
  });

  it("renders a <FooterPost/>", () => {
    // const { footerPost } = setup(postProps,true);
    // expect(footerPost.props().data).toEqual({
    //   title: "Udacity",
    //   body: "new situation",
    //   voteScore: 4,
    //   author: "Feliciano",
    //   timestamp: 142536
    // });
  });

  it("renders a <FooterComment/>", () => {
    // const { footerComment } = setup(commentProps,false);
    // expect(footerComment.props().data).toEqual({
    //   body: "new situation",
    //   voteScore: 4,
    //   author: "Feliciano",
    //   timestamp: 142536
    // });
  });

  it("renders a cardBodyMain", () => {
    const { component } = setup(postProps);
    expect(component).toMatchSnapshot();
  });
});
