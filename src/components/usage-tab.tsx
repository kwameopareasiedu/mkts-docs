import React from "react";
import styled from "styled-components";
import {
  Code,
  Container,
  Heading,
  Highlight,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";

const UsageTabRoot = styled.div``;

export const UsageTab = (): JSX.Element => {
  return (
    <UsageTabRoot>
      <Container maxWidth="3xl" py={6}>
        <Heading as="h1" size="2xl" fontWeight="normal" mb={4}>
          <Highlight
            query="mkts"
            styles={{ px: "1", py: "1", bg: "orange.100" }}>
            mkts
          </Highlight>{" "}
          Usage
        </Heading>

        <Text mb={6}>
          Using <Code>mkts</Code> is very straight forward.
        </Text>

        <Heading as="h2" size="xl" fontWeight="normal" mb={4}>
          Create new project
        </Heading>

        <Code
          display="block"
          whiteSpace="pre"
          mb={4}
          p={2}
          sx={{ bg: "#333", color: "white" }}>
          mkts new [OPTIONS] &lt;project name&gt;
        </Code>

        <Table mb={6}>
          <Thead>
            <Tr>
              <Th>Option</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>
                <Code>--api</Code>
              </Td>
              <Td>
                <Text>Create an API project</Text>
              </Td>
            </Tr>

            <Tr>
              <Td>
                <Code>--lib</Code>
              </Td>
              <Td>
                <Text>Create an NPM library base project</Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>

        <Text fontSize="xl" mb={2}>
          Example
        </Text>

        <Code
          display="block"
          whiteSpace="pre"
          mb={6}
          p={2}
          sx={{ bg: "#333", color: "white" }}>
          mkts new --api test-api
        </Code>
      </Container>

      <hr />

      <Container maxWidth="3xl" py={6}>
        <Heading as="h2" size="xl" fontWeight="normal" mb={4}>
          Show Help
        </Heading>
        <Code
          display="block"
          whiteSpace="pre"
          mb={4}
          p={2}
          sx={{ bg: "#333", color: "white" }}>
          mkts --help
        </Code>
      </Container>
    </UsageTabRoot>
  );
};
