import * as React from "react";
import {
  render,
  cleanup,
  act,
} from "@testing-library/react";
import { DashboardContextProvider } from "../../../context/dashboard-context";
import Header from "./Header";
import { TypeOfTable } from "../Table";
import { HEADER_ATTRIBUTES } from "../../../utils/contants";

describe("Header Component", () => {
  beforeEach(cleanup);

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("Should render repository table header", async () => {

    await act(async () => {

      const { findByText } = render(
        <DashboardContextProvider>
          <Header typeOfTable={TypeOfTable.repository} />
        </DashboardContextProvider>
      );
      await findByText(HEADER_ATTRIBUTES.REPOSITORIES_TABLE[0]);
      expect(findByText(HEADER_ATTRIBUTES.REPOSITORIES_TABLE[1])).toBeTruthy();
      expect(findByText(HEADER_ATTRIBUTES.REPOSITORIES_TABLE[2])).toBeTruthy();
    });
  });

  it("Should render users table header", async () => {

    await act(async () => {

      const { findByText } = render(
        <DashboardContextProvider>
          <Header typeOfTable={TypeOfTable.users} />
        </DashboardContextProvider>
      );
      await findByText(HEADER_ATTRIBUTES.USERS_TABLE[0]);
      expect(findByText(HEADER_ATTRIBUTES.USERS_TABLE[1])).toBeTruthy();
      expect(findByText(HEADER_ATTRIBUTES.USERS_TABLE[2])).toBeTruthy();
    });
  });

});