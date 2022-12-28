import ImageCard from "./ImageCard"
import data from "./data.json"
import "./main.css";
import React, {useState} from 'react';


function Main() {


    let [totalLiks, setTotalLiks] = useState(0);

    const increment=()=>{

        setTotalLiks(totalLiks+1)


    }


    return (
      <div style={{textAlign:"center" , padding:"10px" }}>

        <h3 > Total Num of likes : {totalLiks} 💕</h3>
        <div className="row">

        {data.map((image) => (
            <ImageCard
                id={image._id}
                title={image.title}
                img={image.image_url}
                increment={increment} />
        ))}

        </div>
          
      
      </div>
    );
  }
  
  export default Main;
  