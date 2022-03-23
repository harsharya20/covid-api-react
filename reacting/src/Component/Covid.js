import React, { useEffect } from 'react'
import './Covid.css'
const Covid = () => {
   const getCovidData = async () => {
       try {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData =await res.json();
       }
       catch(err){
           console.log(err);
       }
      
   }

    useEffect(() => {
        //getCovidData();
    }, []);
  return (
    <>
    <section>
    <h1> LIVE</h1>
    <h2>COVID-19 CORONAVIRUS TRACKER</h2>

    <ul>
        <li className='card'>
            <div className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>OUR</span> COUNTRY </p>
                    <p className='card_total card_small'>INDIA</p>
                </div>
            </div>
            
        </li>
        <li className='card'>
            <div className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>TOTAL</span> RECOVERED </p>
                    <p className='card_total card_small'>INDIA</p>
                </div>
            </div>
            
        </li>
        <li className='card'>
            <div className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>TOTAL</span> CONFIRMED </p>
                    <p className='card_total card_small'>INDIA</p>
                </div>
            </div>
            
        </li>
        <li className='card'>
            <div className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>TOTAL</span> DEATH </p>
                    <p className='card_total card_small'>INDIA</p>
                </div>
            </div>
            
        </li>
        <li className='card'>
            <div className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>TOTAL</span> ACTIVE </p>
                    <p className='card_total card_small'>INDIA</p>
                </div>
            </div>
            
        </li>
        <li className='card'>
            <div className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>LAST</span> UPDATED </p>
                    <p className='card_total card_small'>INDIA</p>
                </div>
            </div>
            
        </li>
    </ul>
    </section>
    </>
  )
}

export default Covid