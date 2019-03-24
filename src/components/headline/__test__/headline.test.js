import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../../Utility/utils";
import Headline from "../headline";

const setUp = (props = {}) => {
  return shallow(<Headline {...props} />);
};

describe("Headline component", () => {
  describe("Checking Props types", () => {
    it("Should not throw waring", () => {
      const expectedProps = {
        header: "Test header",
        desc: "test desc",
        tempArr: [
          {
            fName: "test fname",
            lName: "test lName",
            email: "test email",
            onlineStatus: false,
            exp: 2
          }
        ]
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("render without error", () => {
    const wrapper = findByTestAttr(component, "headline-component");
    expect(wrapper.length).toBe(1);
  });
});
