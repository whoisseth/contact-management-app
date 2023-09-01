/** @format */
"use client";

import Layout from "@/components/Layout";
import { LineChart } from "./LineChart";
import { useQuery } from "react-query";
import Map from "./Map";

export default function ChartsAndMaps() {
  const { isLoading, error, data } = useQuery("", () =>
    fetch("https://disease.sh/v3/covid-19/all").then((res) => res.json())
  );

  if (isLoading) return <Layout heading="Charts and Maps">Loading...</Layout>;

  if (error)
    return <Layout heading="Charts and Maps"> An error has occurred</Layout>;

  console.log("data", data);

  return (
    <Layout heading="Charts and Maps">
      <LineChart data={data} />
      <Map />
    </Layout>
  );
}
