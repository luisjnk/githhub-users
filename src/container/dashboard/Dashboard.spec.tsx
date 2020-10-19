import * as React from "react";
import {
  render,
  cleanup,
  act,
  fireEvent,
  findByTestId,
} from "@testing-library/react";
import fetchmock from "fetch-mock-jest";

import { DashboardContextProvider } from "../../context/dashboard-context";
import Dashboard from ".";
import { GITHUB, HOT_REPOSITORY_BUTTON, HOT_USERS_BUTTON } from "../../utils/contants";
import { getLastMonth } from "../../utils/date";
import { REPOSITORIES, USERS_EMPTY, USERS, USERS_DETAILS } from "../../config/mocks/repository-mock";
import TESTS_IDS from "../../utils/constants-testsid";


describe("Dashboard Component", () => {
  beforeEach(cleanup);

  afterEach(() => {
    fetchmock.reset();
    fetchmock.restore();

    cleanup();
    jest.clearAllMocks();
  });

  it("Should render hot repositories table header", async () => {
    const last_month = getLastMonth();
    const URL_REPOSITORY = `${GITHUB.REPOSITORY.URL_PREFIX}${last_month}${GITHUB.REPOSITORY.URL_SUFIX}`;
    const URL_USERS = `${GITHUB.USERS.URL_PREFIX}${last_month}${GITHUB.USERS.URL_SUFIX}`;
    fetchmock.get(URL_REPOSITORY, REPOSITORIES);
    fetchmock.get(URL_USERS, USERS_EMPTY);

    await act(async () => {
      const {getByText, getByTestId, findByTestId } = render(
        <DashboardContextProvider>
          <Dashboard  />
        </DashboardContextProvider>
      );


      await getByText(HOT_REPOSITORY_BUTTON.name);
      const hotRepositoriesButton = getByText(HOT_REPOSITORY_BUTTON.name);
      fireEvent.click(hotRepositoriesButton);

      await findByTestId(TESTS_IDS.repositoryTable);

    });
  });

  it("Should render trending users table header", async () => {
    const last_month = getLastMonth();
    const URL_USERS = `${GITHUB.USERS.URL_PREFIX}${last_month}${GITHUB.USERS.URL_SUFIX}`;

    fetchmock.get(URL_USERS, USERS);
    fetchmock.get(USERS.items[0].url, USERS_DETAILS);

    await act(async () => {
      const {getByText, getByTestId, findByTestId } = render(
        <DashboardContextProvider>
          <Dashboard  />
        </DashboardContextProvider>
      );


      await getByText(HOT_USERS_BUTTON.name);
      const trendingUsersButton = getByText(HOT_USERS_BUTTON.name);
      fireEvent.click(trendingUsersButton);

      await findByTestId(TESTS_IDS.trendingUsersTable);

    });
  });

});