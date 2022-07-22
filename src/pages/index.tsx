import type { GetServerSideProps, NextPage } from "next";

const Home: NextPage = () => {
  return <div></div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/home",
      permanent: false,
    },
  };
};

export default Home;
