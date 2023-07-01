import React, { useState, useEffect } from 'react';

import Icon from "./sub-components/Header/LinkIcon";
import { BsLinkedin } from "react-icons/bs";
import { BsFillCaretUpSquareFill } from "react-icons/bs";


function UpperButton() {


   window.addEventListener("scroll", ()=>{

        let btn = document.getElementById("upperButton");
        
        btn.addEventListener("click", ()=>{
            window.scroll(0,0);
        });

        if(window.scrollY > 200){
            btn.classList.remove("hidden");
        }else{
            btn.classList.add("hidden");    
        }

   });

  return (

    <>
        <button className="fixed z-[999] bottom-5 text-xl right-4 text-sky-900 hidden cursor-pointer bg-transparent rounded-sm hover:text-sky-700 ease-in-out duration-300 w-7 h-7" id='upperButton'>
            <BsFillCaretUpSquareFill className="w-full h-full"></BsFillCaretUpSquareFill>    
        </button>
    </>
  );
}

export default UpperButton;