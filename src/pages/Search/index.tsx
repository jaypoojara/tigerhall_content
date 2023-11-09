import { useMemo, useState } from "react";
import ContentCard from "../../components/ContentCard";
import Layout from "../../components/Layout";
import { Container } from "./style";
import SearchBar from "../../components/SearchBar";
import { useQuery } from "@apollo/client";
import { getContentCards } from "../../service/graphql/query";
import useDebounce from "../../hooks/useDebounce";
import { IContentCard } from "../../components/ContentCard/type";
import { mapContentCardsData } from "../../common/util";
import { IContentData } from "../../service/graphql/responseType";
import ContentCardSkeleton from "../../components/ContentCard/Skeleton";

const SearchPage = () => {
  const [state, setState] = useState<string>("");
  const debouncedValue = useDebounce(state);
  const { data, loading } = useQuery(getContentCards(debouncedValue));
  const contentCardsData: IContentCard[] = useMemo(() => {
    return (data?.contentCards?.edges || [])?.map((edge: IContentData) =>
      mapContentCardsData(edge)
    );
  }, [data?.contentCards?.edges]);
  return (
    <Layout>
      <Container>
        <SearchBar onChange={(e) => setState(e)} />
        {loading && <ContentCardSkeleton />}
        {!loading &&
          contentCardsData.map((content) => (
            <ContentCard {...content} key={content.name + content.author} />
          ))}
      </Container>
    </Layout>
  );
};

export default SearchPage;
