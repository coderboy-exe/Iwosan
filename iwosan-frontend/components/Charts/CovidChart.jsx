import React from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import { locations } from "@/data/data"

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

const CovidChart = () => {
  return (
    <>
        <ComposableMap>
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} />
                ))
                }
            </Geographies>
            {
                locations.map((location, index) => (
                    <Marker key={index} coordinates={location.coordinates}>
                        <circle r={8} fill="#F53" />
                    </Marker>
                ))
            }
           
        </ComposableMap>
    </>
  )
}

export default CovidChart