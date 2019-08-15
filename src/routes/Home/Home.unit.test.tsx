import React from "react";
import { shallow } from "enzyme";

import Home from "./Home";

const defaultProps = {
  classes: {}
};

describe("The Home instance", () => {
  beforeEach(() => jest.clearAllMocks());

  describe("When rendered with default props", () => {
    it("Should render without throwing any errors", () => {
      const component = shallow(<Home {...defaultProps} />);

      console.error = jest.fn();

      expect(component).toMatchSnapshot();
      expect(console.error).not.toHaveBeenCalled();
    });
  });
});
