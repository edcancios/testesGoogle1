import React from "react";
import { StaticGoogleMap, Marker, Path } from "react-static-google-map";

const MapsStatic = props => {
  return (
    <div>
      <StaticGoogleMap
        size="600x600"
        className="img-fluid"
        apiKey="SUpKPUpBGXkW9jRqBxPYkLY7ie0="
      >
        <Marker location="6.4488387,3.5496361" color="blue" label="P" />
      </StaticGoogleMap>

      {/*  <StaticGoogleMap size="600x600" apiKey={"SUpKPUpBGXkW9jRqBxPYkLY7ie0="}>
        <Marker location="6.4488387,3.5496361" color="blue" label="P" />
      </StaticGoogleMap> */}

      {/*  <StaticGoogleMap size="600x600" apiKey={"SUpKPUpBGXkW9jRqBxPYkLY7ie0="}>
        <Marker
          location={{ lat: 40.737102, lng: -73.990318 }}
          color="blue"
          label="P"
        />
        <Path
          points={[
            "40.737102,-73.990318",
            "40.749825,-73.987963",
            "40.752946,-73.987384",
            "40.755823,-73.986397"
          ]}
        />
      </StaticGoogleMap> */}
    </div>
  );
};

export default MapsStatic;
