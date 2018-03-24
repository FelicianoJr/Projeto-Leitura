import React from "react";
import { shallow } from "enzyme";
import CardBodyDetail from "../components/CardBodyDetail";
import GroupButtonBody from "../components/GroupButtonBody";

const setup = data => {
  const component = shallow(<CardBodyDetail data={data} />);

  return {
    component: component,
    divTitle: component.find(".card-title"),
    divBody: component.find(".card-text"),
    badgeScore: component.find(".badge"),
    b: component.find("b"),
    small: component.find("small"),
    groupButton: component.find(GroupButtonBody)
  };
};

describe("<CardBodyDetail/>", () => {
  let postProps;
  beforeEach(() => {
    postProps = {
      title: "Udacity",
      body: "new situation",
      voteScore: 4,
      author: "Feliciano",
      timestamp: 1467166872634
    };
  });

  it("should render all Detail", () => {
    const { divTitle, divBody, badgeScore, small } = setup(postProps);
    expect(divTitle.text()).toEqual("Udacity");
    expect(divBody.at(0).text()).toEqual("new situation");
    expect(badgeScore.text()).toEqual("4");
    expect(small.at(1).text()).toEqual("Criado por Feliciano em 28/06/2016");
  });

  it("render one <GroupButtonCard/>", () => {
    const { groupButton } = setup(postProps);
    expect(groupButton.length).toEqual(1);
  });

  it("snapshot  a cardDetail", () => {
    const { component } = setup(postProps);
    expect(component).toMatchSnapshot();
  });
});
