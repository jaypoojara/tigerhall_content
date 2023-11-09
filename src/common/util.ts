import { IContentCard } from "../components/ContentCard/type";
import { IContentData } from "../service/graphql/responseType";

export const mapContentCardsData = (data: IContentData): IContentCard => {
  return {
    name: data.name,
    image: data.image.uri.replace('https://images.staging.tigerhall.io/', 'https://images.staging.tigerhall.io/resize/250x/'),
    author: data.experts?.[0].firstName + data.experts?.[0].lastName,
    subtext: "COMMUNICATING AS A LEADER",
    completed: "30% Completed",
    duration: "20m",
    org: "Subway APAC",
  };
};
