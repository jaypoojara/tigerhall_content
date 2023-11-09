import React from "react";
import Skeleton from "react-loading-skeleton";
import { SkeletonContainer } from "./style";

const ContentCardSkeleton = () => {
  return (
    <SkeletonContainer>
      <Skeleton height={60} borderRadius={8} />
      <Skeleton height={20} width={150} borderRadius={8} />
      <Skeleton height={20} width={175} count={2} borderRadius={8} />
      <Skeleton height={20} width={100} count={2} borderRadius={8} />
      <Skeleton height={40} borderRadius={8} />
    </SkeletonContainer>
  );
};

export default ContentCardSkeleton;
