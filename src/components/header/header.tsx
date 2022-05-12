import { Box, Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import "./header.scss"

export const Header = () => (
  <>
    <Flex
      as="header"
      position="fixed"
      p={2}
      pl={8}
      top={0}
      backgroundColor={"white"}
      width="100% "
    >
      <Heading size="xl" className="header-title">
        Sanket Saha
      </Heading>
      <Spacer />
      <HStack spacing={12} mx={14}>
        <Box as='button' p={2} className="header-links">
          Skills
        </Box>
        <Box as='button' p={2} className="header-links">
          Projects
        </Box>
        <Box as='button' p={2} className="header-links">
          About Me
        </Box>
      </HStack>
    </Flex>
  </>
);
