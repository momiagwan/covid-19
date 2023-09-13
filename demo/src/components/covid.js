import React, { useEffect } from "react";
import './covid.css';
const Covid=()=>{
    const getCovidData=async()=>{
        try{
        const res= await fetch('https://data.covid19india.org/data.json')
         const actualData=await res.json();
        console.log(actualData.statewise[0])}
        catch(err){console.log(err)}
    }
   useEffect(()=>{getCovidData()},[])
    return(
        <>
        <section >
<h1>live</h1>
<h2>covid-19 coronavirus tracker</h2>
<ul >
<li className="card" style={{width:"200px",height:'200px',border:'2px black solid'}}>
    <div className="card--main">
        <div className="card--inner">
            <p className="card--name"><span>OUR</span>COUNTRY

            </p>
            <p className="card--total card--small">INDIA</p>  
        </div>
    </div>

</li>

</ul>
</section>
<section>

<ul >
<li className="card" style={{width:"200px",height:'200px',border:'2px black solid'}}>
    <div className="card--main">
        <div className="card--inner">
            <p className="card--name"><span>OUR</span>COUNTRY

            </p>
            <p className="card--total card--small">INDIA</p>  
        </div>
    </div>

</li>

</ul>
</section>
<section>

<ul >
<li className="card" style={{width:"200px",height:'200px',border:'2px black solid'}}>
    <div className="card--main">
        <div className="card--inner">
            <p className="card--name"><span>OUR</span>COUNTRY

            </p>
            <p className="card--total card--small">INDIA</p>  
        </div>
    </div>

</li>

</ul>
</section>
<section>

<ul >
<li className="card" style={{width:"200px",height:'200px',border:'2px black solid'}}>
    <div className="card--main">
        <div className="card--inner">
            <p className="card--name"><span>OUR</span>COUNTRY

            </p>
            <p className="card--total card--small">INDIA</p>  
        </div>
    </div>

</li>

</ul>
</section>
<section>

<ul >
<li className="card" style={{width:"200px",height:'200px',border:'2px black solid'}}>
    <div className="card--main">
        <div className="card--inner">
            <p className="card--name"><span>OUR</span>COUNTRY

            </p>
            <p className="card--total card--small">INDIA</p>  
        </div>
    </div>

</li>

</ul>
</section>
<section>

<ul >
<li className="card" style={{width:"200px",height:'200px',border:'2px black solid'}}>
    <div className="card--main">
        <div className="card--inner">
            <p className="card--name"><span>OUR</span>COUNTRY

            </p>
            <p className="card--total card--small">INDIA</p>  
        </div>
    </div>

</li>

</ul>
</section>
<section>

<ul >
<li className="card" style={{width:"200px",height:'200px',border:'2px black solid'}}>
    <div className="card--main">
        <div className="card--inner">
            <p className="card--name"><span> OUR</span>COUNTRY

            </p>
            <p className="card--total card--small">INDIA</p>  
        </div>
    </div>

</li>

</ul>
</section>
<section>

<ul >
<li className="card" style={{width:"200px",height:'200px',border:'2px black solid'}}>
    <div className="card--main">
        <div className="card--inner">
            <p className="card--name"><span>OUR</span>COUNTRY

            </p>
            <p className="card--total card--small">INDIA</p>  
        </div>
    </div>

</li>

</ul>
</section>
        </>
    )
}
export default Covid