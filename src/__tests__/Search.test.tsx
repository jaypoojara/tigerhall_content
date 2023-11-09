import { fireEvent, render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import SearchPage from "../pages/Search";
import { ThemeProvider } from "styled-components";
import { useQuery } from "@apollo/client";
import { theme } from "../common/theme";
import mockData from '../mocks/mockData.json';
import searchedMockData from '../mocks/searchedMockData.json';
jest.mock("@apollo/client");

describe("SearchPage", () => {
  it("should render content card data", async () => {
    (useQuery as jest.Mock).mockReturnValueOnce({
      loading: false,
      error: null,
      data: mockData,
    });
    render(
      <MockedProvider>
        <ThemeProvider theme={theme}>
          <SearchPage />
        </ThemeProvider>
      </MockedProvider>
    );
    const defaultName = "test qa";
    expect(screen.getByText(defaultName)).toBeInTheDocument();

  });

  it("should render searched content card data", async () => {
    (useQuery as jest.Mock).mockReturnValueOnce({
      loading: false,
      error: null,
      data: mockData,
    });
    render(
      <MockedProvider>
        <ThemeProvider theme={theme}>
          <SearchPage />
        </ThemeProvider>
      </MockedProvider>
    );
    const defaultName = "test developer";
    const searchTerm = "test qa";
    expect(screen.getByText(searchTerm)).toBeInTheDocument();

    const searchInput = screen.getByTestId("searchInput");
    
    (useQuery as jest.Mock).mockReturnValueOnce({
      loading: false,
      error: null,
      data: searchedMockData,
    });
    fireEvent.change(searchInput, { target: { value: "test developers" } });
    fireEvent.keyDown(searchInput, { key: "Enter", code: "Enter" });
    expect(screen.getByText(defaultName)).toBeInTheDocument();
  });
});
