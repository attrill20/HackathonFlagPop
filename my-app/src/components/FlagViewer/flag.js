import React,{useEffect,useState} from "react";



function FlagViewer(props){

    const [country,setCountry]=useState()

   const randomNum=(Math.floor(Math.random() * 219) + 1)

    useEffect(()=>{
        async function countryFetch(){
            const res = await fetch(`https://countriesnow.space/api/v0.1/countries/flag/images/`);
            const data =await res.json();
            setCountry(data);
            console.log(country);
    
        }
        countryFetch()
    }
    ,[props]);
    return (
        <div>
            {country &&(
                <>
             <h1>Country:{country.data[randomNum].name}</h1> 
             <img src={country.data[randomNum].flag}/>
        </>
              )}
        </div>
    )

}














export default FlagViewer;