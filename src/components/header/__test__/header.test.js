import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../Utility/utils";
import Header from "../header";

const setUp = props => {
  return shallow(<Header {...props} />);
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("render without errors", () => {
    const wrapper = findByTestAttr(component, "wrap");
    expect(wrapper.length).toBe(1);
  });

  it("should render logo", () => {
    const wrapper = findByTestAttr(component, "logo");
    expect(wrapper.length).toBe(1);
  });
});
