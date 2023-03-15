import Head from "next/head";
import Header from "@/components/cms/Header";
import CMSTabs from "@/components/cms/CMSTabs";
import Footer from "@/components/Footer";

// API url
import { api } from "@/config/api";

// Data Types
import { Facts } from "@/data/Facts";

type Props = {
  facts: Facts[];
};

export default function CMS(props: Props) {
  return (
    <>
      <Head>
        <title>HRH - CMS</title>
        <meta name="application-name" content="HRH - CMS" />
        <meta name="description" content="CMS for HRH." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <CMSTabs facts={props.facts} />

      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const resFacts = await fetch(`${api}/facts`);
  const facts = await resFacts.json();

  return {
    props: {
      facts: facts,
    },
  };
};
