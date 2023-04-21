import React, { useEffect, useState } from "react";

function PopViewer({props}) {
    const [pop, setPop] = useState();
    
    const code = props + 46;
    console.log (code)

    useEffect(() => {
        async function popFetch() {
          const res = await fetch(
            "https://countriesnow.space/api/v0.1/countries/population"
          );
          const data = await res.json();
          setPop(data.data[code]); // check this
        }
        popFetch();
      }, [code]);

console.log(pop);
const newArray=[]

    return (
        <div>
        {pop && (
          <>
          <p>{pop.country}</p>
            <p> {pop.populationCounts[58].value} </p>
            </>
            )}
        </div>
    );
}

export default PopViewer;