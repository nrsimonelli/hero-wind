import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../stitches/Avatar';
import { Flex } from '../stitches/Flex';

const HeroInfoAvatar = ({
  image,
  altText,
  fallback,
}: {
  image: string;
  altText: string;
  fallback: () => string;
}) => (
  <Flex>
    <Avatar>
      <AvatarImage src={image} alt={altText} />
      <AvatarFallback delayMs={600}>{fallback}</AvatarFallback>
    </Avatar>
  </Flex>
);

export default HeroInfoAvatar;
