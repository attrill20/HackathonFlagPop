import React, { useEffect, useState } from "react";

function FlagViewer({props}) {
  const [country, setCountry] = useState();

  useEffect(() => {
    async function countryFetch() {
      const res = await fetch(
        "https://countriesnow.space/api/v0.1/countries/flag/images/"
      );
      const data = await res.json();
      setCountry(data.data[props]);
    }
    countryFetch();
  }, [props]);

  return (
    <div>
      {country && (
        <>
          <h1>Country: {country.name}</h1>
          <h2>Country code: {country.iso3}</h2>
          <img src={country.flag} alt="Flag" />
        </>
      )}
    </div>
  );
}

export default FlagViewer;