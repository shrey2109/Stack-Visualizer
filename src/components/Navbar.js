import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./Navbar.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";

function Navbar() {
    const myState = useSelector((state) => state.updateProps);
    const dispatch = useDispatch();

    const [arr, setArr] = useState([]);



    const handlePush = () => {
      console.log("push clicked");
        var num = [document.getElementById("textfield").value, ...arr] 
        document.getElementById("textfield").value = "";
        setArr(num);
        console.log(arr);

        dispatch({
          type: "UPDATE_ARRAY",
          arrVal: num,
        });
      }
        
        const handlePop = () => {
          console.log("pop clicked");
          // var num = arr;
          // num.shift();
          // setArr(num);
          arr.shift();
          console.log(arr.length);

          dispatch({
            type: "UPDATE_ARRAY",
            arrVal: arr,
          });
    }

    const handlePopAll = () => {
      console.log("PA clicked");
      setArr([]);

      dispatch({
        type: "UPDATE_ARRAY",
        arrVal: [],
      });
    }

    return (
        <div className="navDiv">

          {/* <button id='play' className="play" onClick={() => handlePlayPause(true)} > PLAY </button> */}
          <button id='play' className="play" onClick={() => handlePush(true)} > PUSH </button>
          <button id='play' className="play" onClick={() => handlePop(true)} > POP </button>
          <button id='play' className="play" onClick={() => handlePopAll(true)} > POP ALL </button>
    
          <div>
            <input
              id='textfield'
              type="text"
              placeholder="Enter The Numbers"
            //   onChange={(e) => handleArray(e.target.value)}
            //   value={arr}
              className="numVal"
            />
          </div>
        </div>
      );
    };
    
    export default Navbar;
    