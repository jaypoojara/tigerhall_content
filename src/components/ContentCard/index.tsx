import {
  Container,
  Content,
  InteractionContainer,
  ContentStatus,
  ContentWrapper,
  DurationContainer,
  ImageAreaContainer,
  PodcastIconContainer,
  ProgressBarContainer,
  TitleContainer,
} from "./style";
import ContentStatusIcon from "../../assets/icons/PartiallyCompleteClock.svg";
import EllipseIcon from "../../assets/icons/Ellipse.svg";
import PodcastIcon from "../../assets/icons/PodcastIcon.svg";
import ShareIcon from "../../assets/icons/ShareIcon.svg";
import BookmarkIcon from "../../assets/icons/BookmarkIcon.svg";
import ProgressBarIcon from "../../assets/icons/ProgressBarIcon.svg";
import { MDHeaderBold, XSHeaderBold, XSHeaderMedium } from "../TextComp/style";
import Duration from "../Duration";
import { IContentCard } from "./type";

const ContentCard = ({
  name,
  image,
  author,
  subtext,
  completed,
  duration,
  org,
}: IContentCard) => {
  return (
    <Container>
      <ImageAreaContainer imageUrl={image}>
        <ContentStatus>
          <img src={ContentStatusIcon} alt="ContentStatusIcon" />
          <XSHeaderBold>{completed}</XSHeaderBold>
        </ContentStatus>
        <PodcastIconContainer>
          <img src={EllipseIcon} alt="EllipseIcon" />
          <img src={PodcastIcon} alt="PodcastIcon" />
        </PodcastIconContainer>
        <DurationContainer>
          <Duration time={duration}/>
        </DurationContainer>
      </ImageAreaContainer>
      <ProgressBarContainer>
        <img src={ProgressBarIcon} alt="ProgressBarIcon" />
      </ProgressBarContainer>
      <ContentWrapper>
        <Content>
          <TitleContainer>
            <XSHeaderMedium>{subtext}</XSHeaderMedium>
            <MDHeaderBold>
              {name}
            </MDHeaderBold>
          </TitleContainer>
          <div>
            <XSHeaderMedium>{author}</XSHeaderMedium>
            <XSHeaderBold>{org}</XSHeaderBold>
          </div>
        </Content>
        <InteractionContainer>
          <img src={ShareIcon} alt="ShareIcon" />
          <img src={BookmarkIcon} alt="BookmarkIcon" />
        </InteractionContainer>
      </ContentWrapper>
    </Container>
  );
};

export default ContentCard;
