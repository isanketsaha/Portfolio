import {
  Container,
  HStack,
  Text,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import image from "../../../src/static/images/Chubbs DrawKit_Vector_Illustrations-02.png";

export const Home = () => (
  <>
    <HStack >
      <Container maxW="2xl">
        <>
          <Heading as="h1" size="4xl">
            I'm a
          </Heading>
          <Heading as="h1" size="4xl">
            Fullstack
          </Heading>
          <Heading as="h1" size="4xl">
            Developer
          </Heading>
        </>
        <Text fontSize="3xl" my={8}>
          {  
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Experince with ")
                  .typeString("Spring Boot")
                  .pauseFor(1000)
                  .deleteChars(11)
                  .pauseFor(500)
                  .typeString("React")
                  .pauseFor(1000)
                  .start();
              }}
            />
          }
        </Text>
        <Button size="lg" colorScheme="yellow"  shadow= "lg">
          Resume
        </Button>
      </Container>
      <Container maxW="3xl" pt={20}>
        <Image objectFit="cover" src={image} alt="Welcome icon" />
      </Container>
    </HStack>
  </>
);
