import React,{useState} from 'react';
import Light from './components/Light';
import  './index.css'

/* 
刚开始一个都是黑的，第一个是红的，然后到了duration的时间，开始闪烁 N s,
*/
function TrafficLightItem() {
  const [state,setState] = useState([
    {color:'red',duration:3000,twinkleDuration:3000},
    // {color:'green',duration:3000,twinkleDuration:3000},
    // {color:'yellow',duration:3000,twinkleDuration:0},
  ])
  const changeColor = (index,color) => {
    
    console.log(index,color)
     const newState = state;
     newState[index].color = color;
     setState(newState);
  }
  return (
    <div className="App">
     {
       state.map((item,index) => {
         return(
           <div key={index}>
             <Light 
              changColor={changeColor} 
              key={index} 
              item={item}/>
           </div>
         )
       })
     }
    </div>
  );
}

export default TrafficLightItem;
