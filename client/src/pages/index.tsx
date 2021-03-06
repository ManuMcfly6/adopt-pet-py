import { Heading } from "@chakra-ui/core";
import React from "react";
import { AnimalCardList } from "../components/AnimalCardList";
import { Layout } from "../components/Layout";
import { withApollo } from "../utils/withApollo";

const Index: React.FC = () => {
  return (
    <Layout>
      <Heading mb={5} textAlign="center">
        Most Recent
      </Heading>

      <AnimalCardList />
    </Layout>
  );
};

export default withApollo({ ssr: true })(Index);
