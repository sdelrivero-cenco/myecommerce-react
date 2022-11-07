import React from "react";
import Categories from "../../components/Categories/Categories";
import Combos from "../../components/Combos/Combos";
import Layout from "../../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Categories />
      <Combos />
    </Layout>
  );
}
