import React ,{ useState, useEffect } from 'react'
import './css/App.css'
import './css/index.css'

import NavBar from './components/Navbar';
import { useTranslation } from 'react-i18next';

import Photo from "./img/Logo.webp";
import Button from './components/sub-components/Main/Button';


function App() {

  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation("global");



  return (
    <>

        <div className='bg-gray-100 min-h-screen dark:bg-zinc-700 font-sans'>
          {/* <Header></Header> */}


          <NavBar></NavBar>

          <main className='flex items-center justify-center min-h-[100vh]'> 

            <section className='flex items-center justify-center  w-full h-full '>
              
              <div className='w-1/2 flex '>

                <div className='w-1/2 '></div>

                <div className='w-1/2  '>

                  <p className='text-gray-400  dark:text-sky-700'>
                    <b>{t("main.Hello")} {t("main.firstLine")} </b>
                  </p>

                  <p className='text-[50px]'>
                    <b className='text-sky-900  dark:text-white'>Daniel Almeida</b>
                  </p>

                  <p className='text-[20px] mb-4 text-gray-400 font-bold'>
                    {t("main.secondLine")} <span className='text-gray-500'>Full Stack Developer</span>
                  </p>

                  <p className='mb-4 text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sunt dolorum delectus natus quae saepe iste soluta 
                    laboriosam ut eveniet veniam.
                  </p>

                  <Button

                    className="bg-sky-800 p-3 pl-7 pr-7 border-2 dark:border-gray-700 border-gray-200 m-1 ml-0 text-gray-200 font-bold rounded-lg mt-3 ease-out duration-300
                    hover:bg-gray-200 hover:text-sky-800 hover:border-sky-800"
                    id="HireMe"
                    target=""
                    text="Hire Me"

                    />

                  <Button

                    className="bg-sky-600 p-3 pl-7 pr-7 border-2 dark:border-gray-700 border-gray-200 text-gray-200 font-bold rounded-lg  ease-out duration-300
                     hover:bg-gray-200 hover:text-sky-800 hover:border-sky-7000  m-1"
                    id="cvDownload"
                    target=""
                    text="Download CV"
                  
                  />

                </div>

              </div>
              
              <div className='h-full w-1/2 align-middle mr-7' >
                <img src={Photo} className='w-full drop-shadow-2xl' alt="Profile Photo" />
              </div>

              {/* <div className='p-5 w-1/2'>
                <h3 className='uppercase text-[20px] text-gray-700 font-bold dark:text-white' >{t("main.Hello")}</h3>
                <h1 className='text-[50px] text-gray-700 dark:text-white '>{t("main.firstLine")}  <b className='text-sky-900 dark:text-sky-700'>Daniel Almeida</b></h1>
                <h2 className='text-[40px] text-gray-700 dark:text-white'>{t("main.secondLine")}</h2>
              </div>

              <div className='p-5'>
                <img src={Photo} className='w-full drop-shadow-2xl' alt="Profile Photo" />
              </div> */}

            </section>

            {/* <p className='font-bold uppercase opacity-50 text-sky-800'>{t("main.Hello")}</p>   */}
          </main>

          {/* <Main></Main>
          <Footer></Footer> */}
        </div>

    </>
  )
}

export default App
