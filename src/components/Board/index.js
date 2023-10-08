import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
const Board =()=>{
    const canvasRef = useRef(null);
    const activeMenuItem = useSelector((state)=>state.menu.activeMenuItem)
    const {color, size} = useSelector((state) => state.toolbox[activeMenuItem]);

    console.log(color, size);
    useEffect(()=>{
       if(!canvasRef.current)return;
       const canvas = canvasRef.current;
       const context = canvas.getContext("2d");
    //    when your are mouting
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    })
    return(
        <canvas ref={canvasRef}>

        </canvas>
    )
}

export default Board;