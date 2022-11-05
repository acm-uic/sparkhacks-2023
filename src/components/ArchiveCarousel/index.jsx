import React, { useState, useEffect } from "react";
import { ARCHIVE } from "./allarchive";
import { Item } from "./Item";

export default function ArchiveCarousel() {
  const [index, setIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if(newIndex < 0) {
      newIndex = ARCHIVE.length-1;
    }

    if(newIndex >= ARCHIVE.length) {
      newIndex = 0;
    }
  
    setIndex(newIndex);
  }

  useEffect(() => {
    const interval = setInterval(() => {  
      updateIndex(index + 1);
      }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    }
  })

  return (
    <div className="relative overflow-hidden" >
        <h1 className="grid place-items-center">Archive</h1>
        <button className="invisible md:visible absolute width-auto height-auto z-10 inset-y-1/2 left-4" onClick={() => {
          updateIndex(index-1)
          }}>
            <img src={require('../../assets/icons/chevron-left.png')} alt="left"/>
        </button>

        <button className="invisible md:visible absolute width-auto height-auto z-10 inset-y-1/2 right-4" onClick={() => {
          updateIndex(index+1)
          }}>
            <img src={require('../../assets/icons/chevron-right.png')} alt="right"/>
        </button>
      <div className="whitespace-nowrap	transition duration-500" style={{transform: `translateX(-${index*100}%)`}}>
        {
          ARCHIVE.map((c) => {
            return <Item name={c[0]} title={c[1]} description={c[2]} link={c[3]}/>
          })
        }
      </div>

    </div>
  );
}



