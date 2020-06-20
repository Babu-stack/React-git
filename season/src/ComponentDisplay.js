import React from "react";
import './ComponentDisplay.css'
const SeasonConig = {
  summer: { text: "Hey its Summer There", iconName: "sun" },
  winter: { text: "Hey its Winter There",iconName:"snowflake" },
};

const getSeason=(lat,month)=>{

if(month>2 && month <9){

    return lat >0 ? "summer" : "winter";
}
else {
    return lat >0 ? "winter" :"summer"; 
}

}

const ComponentDisplay = (props) => {

    const season = getSeason(props.lat,new Date().getMonth());
    const {text,iconName}=SeasonConig[season];

    return (<div className={`${season} season-display`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />

    </div>
    );
};

export default ComponentDisplay;
