/** @format */
"use client";

import Layout from "@/components/Layout";
import { LineChart } from "./LineChart";
import { useQuery } from "react-query";
import LeafletMap from "./LeafletMap";

export default function ChartsAndMaps() {
  const { isLoading, error, data } = useQuery("", () =>
    fetch("https://disease.sh/v3/covid-19/all").then((res) => res.json())
  );
  const { data: countryData, isLoading: isCountryData } = useQuery(
    "countryData",
    () =>
      fetch("https://disease.sh/v3/covid-19/countries").then((res) =>
        res.json()
      )
  );

  if (isLoading) return <Layout heading="Charts and Maps">Loading...</Layout>;

  if (error)
    return <Layout heading="Charts and Maps"> An error has occurred</Layout>;

  return (
    <Layout heading="Charts and Maps">
      <LineChart data={data} />
      {isCountryData ? "loading..." : <LeafletMap data={countryData} />}
    </Layout>
  );
}
