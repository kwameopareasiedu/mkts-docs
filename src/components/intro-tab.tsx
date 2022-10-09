import React from "react";
import styled from "styled-components";
import {
  Code,
  Container,
  GridItem,
  Heading,
  Highlight,
  Link,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";

const IntroTabRoot = styled.div``;

export const IntroTab = (): JSX.Element => {
  return (
    <IntroTabRoot>
      <Container maxWidth="3xl" py={6}>
        <Heading as="h1" size="2xl" fontWeight="normal" mb={4}>
          What is{" "}
          <Highlight
            query="mkts"
            styles={{ px: "1", py: "1", bg: "orange.100" }}>
            mkts
          </Highlight>{" "}
          ?
        </Heading>

        <Text mb={6}>
          <Code>mkts</Code> is a command line interface (CLI) tool that creates
          a base codebase for modern Typescript projects. It supports
          scaffolding for three (3) types of projects.
        </Text>

        <Table mb={6}>
          <Thead>
            <Tr>
              <Th>Project Type</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>
                <Code>API</Code>
              </Td>
              <Td>
                <Text>
                  <Link
                    color="teal.400"
                    href="https://nodejs.org/en/"
                    isExternal>
                    NodeJS{" "}
                    <Text
                      as="i"
                      className="bi bi-box-arrow-up-right"
                      fontSize="xs"
                    />
                  </Link>{" "}
                  +
                  <Link
                    color="teal.400"
                    href="https://expressjs.com/"
                    isExternal>
                    Express{" "}
                    <Text
                      as="i"
                      className="bi bi-box-arrow-up-right"
                      fontSize="xs"
                    />
                  </Link>{" "}
                  backend projects which expose REST APIs that can be consumed
                  by a compliant client
                </Text>
              </Td>
            </Tr>

            <Tr>
              <Td>
                <Code>Web</Code>
              </Td>
              <Td>
                <Text>
                  React web application base built on top on{" "}
                  <Link color="teal.400" href="https://vitejs.dev/" isExternal>
                    Vite{" "}
                    <Text
                      as="i"
                      className="bi bi-box-arrow-up-right"
                      fontSize="xs"
                    />
                  </Link>
                  . Routing is handled by{" "}
                  <Link
                    color="teal.400"
                    href="https://reactrouter.com/"
                    isExternal>
                    React Router DOM{" "}
                    <Text
                      as="i"
                      className="bi bi-box-arrow-up-right"
                      fontSize="xs"
                    />
                  </Link>{" "}
                  and state management is handled by{" "}
                  <Link
                    color="teal.400"
                    href="https://github.com/pmndrs/zustand#readme"
                    isExternal>
                    Zustand{" "}
                    <Text
                      as="i"
                      className="bi bi-box-arrow-up-right"
                      fontSize="xs"
                    />
                  </Link>
                  .
                </Text>
              </Td>
            </Tr>

            <Tr>
              <Td>
                <Code>Library</Code>
              </Td>
              <Td>
                Base project for an NPM library. Tooling is handled by{" "}
                <Link color="teal.400" href="https://rollupjs.org" isExternal>
                  Rollup{" "}
                  <Text
                    as="i"
                    className="bi bi-box-arrow-up-right"
                    fontSize="xs"
                  />
                </Link>{" "}
                and tests are setup with{" "}
                <Link color="teal.400" href="https://mochajs.org/" isExternal>
                  Mocha test runner{" "}
                  <Text
                    as="i"
                    className="bi bi-box-arrow-up-right"
                    fontSize="xs"
                  />
                </Link>{" "}
                and{" "}
                <Link
                  color="teal.400"
                  href="https://www.chaijs.com/"
                  isExternal>
                  Chai assertion library{" "}
                  <Text
                    as="i"
                    className="bi bi-box-arrow-up-right"
                    fontSize="xs"
                  />
                </Link>
              </Td>
            </Tr>
          </Tbody>
        </Table>

        <Heading as="h2" size="xl" fontWeight="normal" mb={4}>
          Installation
        </Heading>

        <Text mb={4}>
          <Code>mkts</Code> should be installed as a global dependency
        </Text>

        <SimpleGrid columns={[1, 1, 1, 2]} spacing={4}>
          <GridItem>
            <Code mb={2}>Yarn</Code>
            <Code
              display="block"
              whiteSpace="pre"
              p={2}
              sx={{ bg: "#333", color: "white" }}>
              yarn global add mkts
            </Code>
          </GridItem>

          <GridItem>
            <Code mb={2}>NPM</Code>
            <Code
              display="block"
              whiteSpace="pre"
              p={2}
              sx={{ bg: "#333", color: "white" }}>
              npm install --global mkts
            </Code>
          </GridItem>
        </SimpleGrid>
      </Container>
    </IntroTabRoot>
  );
};
