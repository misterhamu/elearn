import { NextPage } from "next";
import Head from "next/head";
import { Button } from "@/components/ui/button"

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>e-learning-demo</title>
        <meta name="description" content="Generated by Create Next Stack." />
      </Head>
      <div>
      <Button>Click me</Button>
    </div>
    </>
  );
};

export default Index;
