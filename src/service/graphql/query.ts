import { gql } from "@apollo/client";

export const getContentCards = (filter: string) => {
  return gql`
    {
        contentCards(filter: { limit: 20, keywords: "${filter}", types: [PODCAST] }) {
            edges {
            ... on Podcast {
                name
                image {
                ...Image
                }
                categories {
                ...Category
                }
                experts {
                ...Expert
                }
            }
            }
        }
        }
        
        fragment Image on Image {
        uri
        }
        
        fragment Category on Category {
        name
        }
        
        fragment Expert on Expert {
        firstName
        lastName
        title
        company
        }
    `;
};
