import React, { useState, useEffect } from 'react';

import Icon from "./sub-components/Header/LinkIcon";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";


// function LoadingScreen() {
//   return (
//     <div className="flex items-center bg-slate-100 justify-center h-screen">
//       <div className="animate-spin rounded-full h-16 w-16 border-2 border-y-amber-500"></div>
//     </div>
//   );
// }

// var options = [
// ];

function Header() {


  const [selected, setSelected] = useState("");

  //const [backendData, setBackendData] = useState(null); // Initialize with null
  //Grab Data from MongoDb
  // useEffect(() => {

  //   const fetchData = async () =>{
      
  //     const result = await fetch(import.meta.env.VITE_API_URL + "/languages");
  //     const jsonResult = await result.json()
  //     setBackendData(jsonResult);

  //   }

  //   fetchData();

  // }, []);

  // const handleDropdownChange = (selectedOption) => {
  //   console.log(selectedOption);
  //   // Handle the selected option
  // };

  // //Loading Screen if the json is empty
  // if (backendData === null) {
  //   return (
  //     <>
  //       <LoadingScreen></LoadingScreen>
  //     </>
  //   );
  // }


  //Header Load
  return (

    <>
       <header className="w-full p-0 flex text-gray-400 bg-white dark:bg-zinc-800">

        <div className='w-1/3 flex justify-start ml-8'>
         
        </div>

        <div className='w-1/3'>
        </div>
        
        <div className='w-1/3 flex justify-end mr-8 dark:text-white'>
          
          <Icon
              className='m-1 hover:text-sky-900 ease-out duration-300 ' 
              icon = {<BsLinkedin />}
              link = "https://www.linkedin.com/in/daniel-almeida-8760b116b/"
          />
          <Icon
              className='m-1 hover:text-sky-900 ease-out duration-300'
              icon = {<BsInstagram />}
              link = "https://www.instagram.com/31_almeida_01/"
          />


          {/* <Icon
              className='m-1 ml-3 hover:text-amber-600 ease-out duration-300' 
              icon = {<BsSun />}
              link = "https://www.linkedin.com/in/daniel-almeida-8760b116b/"
          /> */}
            {/* {
              backendData.map(country =>(
              <ImageOption key={country._id} value={country.Code} label={country.Code} imageUrl={country.Icon} />
              ))
            } */}
        </div>  

      </header> 
    </>
  );
}

export default Header;