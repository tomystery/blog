import React, { useEffect,useState } from 'react';
const Light = ({item,changeColor,index}) => {
  
    const [state,setState] = useState({
        color:item.color,
       
    })
    const time_val = setInterval(() => {
        
    },1000)
    useEffect(() => {
        let timer = setTimeout(() => {
          /*  let timer = setInterval(() => {
               console.log(state.twinkleDuration);
                if(state.twinkleDuration > 1000){
                    setState((state) => ({
                        ...state,
                        color : state.color === 'black' ? item.color : 'black',
                        twinkleDuration:state.twinkleDuration - 1000
                    }))
                }else{
                    clearInterval(timer)
                }
            },1000) */
          
           return clearInterval(timer)
        },item.duration)
    })
    return(
        <div className={state.color}>

        </div>
    )
}
export default Light;