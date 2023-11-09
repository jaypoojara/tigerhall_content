import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme";
import SearchPage from "./pages/Search";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { SkeletonTheme } from "react-loading-skeleton";

const client = new ApolloClient({
  uri: "https://api.tigerhall.net/v2/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme
        baseColor={theme.palette.grey[500]}
        highlightColor={theme.palette.grey[700]}
      >
        <ApolloProvider client={client}>
          <SearchPage />
        </ApolloProvider>
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default App;
