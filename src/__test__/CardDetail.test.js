import React from "react";
import { shallow } from "enzyme";
import CardDetail from "../components/CardDetail";
import GroupButtonCard from "../components/GroupButtonCard";

const setup = (data, showPostButton) => {
  
  const component = shallow(
    <CardDetail  data={data} />
  );

  return {
    component: component,
    divTitle: component.find(".card-title"),
    divBody: component.find(".card-text"),
    badgeScore: component.find(".badge"),
    b: component.find("b"),
    groupButton: component.find(GroupButtonCard)
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

  it("should render all Detail", () => {
    const { divTitle, divBody, badgeScore, b } = setup(postProps);
    expect(divTitle.text()).toEqual("Udacity");
    expect(divBody.at(0).text()).toEqual("new situation");
    expect(badgeScore.text()).toEqual("4");
    expect(b.at(1).text()).toEqual("Feliciano");
    expect(b.at(2).text()).toEqual("142536");
  });

  it("renders a <GroupButtonCard/>", () => {
    const { groupButton } = setup(postProps);
    expect(groupButton.length).toEqual(1)
});


  it("snapchot  a cardDetail", () => {
    const { component } = setup(postProps);
    expect(component).toMatchSnapshot();
  });
});
