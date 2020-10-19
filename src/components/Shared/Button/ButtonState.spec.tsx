import * as React from "react";
import {
  render,
  cleanup,
  act,
} from "@testing-library/react";
import { DashboardContextProvider } from "../../../context/dashboard-context";
import ButtonState from "./ButtonState";
import TESTS_IDS from "../../../utils/constants-testsid";


describe("ButtonState Component", () => {
  beforeEach(cleanup);

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("Should render Loading button", async () => {

    await act(async () => {

      const { findByTestId } = render(
        <DashboardContextProvider>
          <ButtonState isLoading={true} id={"Loading"} name={"Loading"} />
        </DashboardContextProvider>
      );
      await findByTestId(TESTS_IDS.loadingButton);
      expect(findByTestId(TESTS_IDS.loadingButton)).toBeTruthy();
    });
  });


  it("Should render Primary button", async () => {

    await act(async () => {

      const { findByTestId } = render(
        <DashboardContextProvider>
          <ButtonState isLoading={false} id={"Primary"} name={"Primary"} />
        </DashboardContextProvider>
      );
      await findByTestId(TESTS_IDS.primaryButton);
      expect(findByTestId(TESTS_IDS.primaryButton)).toBeTruthy();
    });
  });

});