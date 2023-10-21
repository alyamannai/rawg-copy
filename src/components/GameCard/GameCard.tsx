import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Image,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

interface Props {
  image: string;
  alt?: string;
  description?: string;
  gameName: string;
}

const GameCard = ({ image, description, alt, gameName }: Props) => {
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image src={image} alt={alt} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{gameName}</Heading>
            <Text>{description}</Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </>
  );
};

export default GameCard;
