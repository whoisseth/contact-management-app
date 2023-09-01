/** @format */
"use client";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import "leaflet/dist/leaflet.css";

interface CountryData {
  updated: number;
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}
interface Props {
  data: CountryData[];
}

export default function LeafletMap({ data }: Props) {
  const center = [20, 0]; // Initial map center
  const zoom = 2; // Initial zoom level

  return (
    <>
      <h2 className="text-4xl font-bold text-center mt-10 mb-5 text-gray-700 dark:text-gray-200  p-2 rounded-md bg-gray-100 dark:bg-gray-900 dark:border-gray-700 border-2 border-gray-300">
        Global Data of Cases
      </h2>

      <MapContainer
        // @ts-ignore
        center={center}
        zoom={zoom}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {data?.map((countryData) => (
          <Marker
            // @ts-ignore
            icon={L.icon({
              iconUrl:
                "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/67-512.png",

              iconSize: [25, 41],
              iconAnchor: [12, 41]
            })}
            // @ts-ignore
            title={countryData.country}
            key={countryData.country}
            position={[
              countryData.countryInfo.lat,
              countryData.countryInfo.long
            ]}
          >
            <Popup>
              <div>
                <Image
                  width={100}
                  height={100}
                  src={countryData.countryInfo.flag}
                  alt={`${countryData.country} Flag`}
                />
                <h2>{countryData.country}</h2>
                <p>Total Active Cases: {countryData.active}</p>
                <p>Total Recovered Cases: {countryData.recovered}</p>
                <p>Total Deaths: {countryData.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
