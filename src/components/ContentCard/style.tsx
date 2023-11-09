import styled from "styled-components";
import { ImageAreaProps } from "./type";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  width: 244px;
`;

export const ImageAreaContainer = styled.div<ImageAreaProps>`
  position: relative;
  background-image: url(${({ imageUrl }) => imageUrl});
  height: 120px;
  width: 100%;
  border-radius: 8px 8px 0 0;
`;

export const ContentStatus = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 4px;
  position: absolute;
  top: 0px;
  border-radius: 8px 0px 5px 0px;
  background: ${({ theme }) => theme.palette.orange[50]};
`;

export const PodcastIconContainer = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: 8px;
  left: 8px;
  img:last-child {
    position: absolute;
    left: 5px;
    top: 5px;
  }
`;

export const DurationContainer = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
`;

export const ProgressBarContainer = styled.div`
  margin-top: -14px;
  background-color: ${({ theme }) => theme.palette.white};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

export const ContentWrapper = styled.div`
  display: flex;
  padding: 8px 8px 12px 8px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 0px 0px 8px 8px;
  gap: 16px;
  background-color: ${({ theme }) => theme.palette.white};
`;

export const InteractionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  align-self: stretch;
`;

export const SkeletonContainer = styled.div`
  width: 244px;
`;


export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
