import React ,{ useState, useEffect } from 'react'
import './css/App.css'
import './css/index.css'

import NavBar from './components/Navbar';
import Card from './components/sub-components/Main/Card';
import Form from './components/sub-components/Main/Form';
import Footer from './components/Footer';
import UpperButton from './components/UpperButton';

import { useTranslation } from 'react-i18next';

import Photo from "./img/Logo.webp";
import Button from './components/sub-components/Main/Button';


import { BsChevronRight } from "react-icons/bs";
import { BsDatabase } from "react-icons/bs";
import { BsMotherboard } from "react-icons/bs";
import { BsBrush } from "react-icons/bs";



function App() {

  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation("global");

  

  return (
    <>

        <div className='bg-gray-100 min-h-screen dark:bg-zinc-800 font-sans'>
          {/* <Header></Header> */}

          <UpperButton></UpperButton>

          <NavBar></NavBar>

          {/* Apresentation */}
          <main className='flex items-center justify-center min-h-[100vh]' id='home'> 

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

                  <p className='mb-4 dark:text-gray-400 text-gray-700'>
                    {t("main.miniDescription")} 
                  </p>

                  <Button
                    className="bg-sky-800 p-3 pl-7 pr-7 border-2 dark:border-gray-700 border-gray-200 m-1 ml-0 text-gray-200 font-bold rounded-md mt-3 ease-out duration-300
                    hover:bg-gray-200 hover:text-sky-800 hover:border-sky-800"
                    id="HireMe"
                    target=""
                    text="Hire Me"
                    />
{/* 
                  <Button

                    className="bg-sky-600 p-3 pl-7 pr-7 border-2 dark:border-gray-700 border-gray-200 text-gray-200 font-bold rounded-lg  ease-out duration-300
                     hover:bg-gray-200 hover:text-sky-800 hover:border-sky-7000  m-1"
                    id="cvDownload"
                    target=""
                    text="Download CV"
                  
                  /> */}

                </div>

              </div>
              
              <div className='h-full w-1/2 align-middle mr-7' >
                <img src={Photo} className='w-full drop-shadow-2xl' alt="Profile Photo" />
              </div>


            </section>

          </main>
          
          {/* About Me */} 
          <section className='dark:text-gray-400 text-gray-700 flex items-center justify-center p-24 pt-0 min-h-[80vh] pb-[120px] z-0 relative' id="about">

              <div className='w-full ml-auto mr-auto p1'>

                <div className='flex flex-wrap items-center justify-center '>

                  <div className="w-1/2 p-4">

                    <h3 className="text-sky-900  font-light text-3xl uppercase mb-5 text-center block dark:text-sky-700"  >{t("about.Title")}</h3>
                    
                    <div className="full p-[70px] m-5 border-2 border-sky-900 drop-shadow-2xl  bg-white dark:bg-zinc-900">

                      <p className='mb-3'>
                        {t("about.FirstParagraph")} 
                      </p>
                      
                      <p className='mb-3'>
                        {t("about.SecondParagraph")}             
                      </p>

                      <p>
                        {t("about.ThirdParagraph")}   
                      </p>  

                    </div> 

                  </div>

      
                </div>

              </div>

          </section>

          {/* Skills */} 
          <section className='dark:text-gray-400 text-gray-700 flex items-center justify-center min-h-[80vh] pt-0  pb-[120px] z-0 relative' id="skills">
            
            <div className="w-full">

              <h3 className="text-sky-900  font-light text-3xl uppercase mb-11 text-center block dark:text-sky-700"  >{t("skills.Title")}</h3>
              
              <div className='flex flex-wrap items-center justify-center text-black'>

                <div className="w-1/4 m-5 p-7 h-full bg-white dark:bg-zinc-900 drop-shadow-2xl border-2 border-sky-900">

                    <h1 className='text-center m-5 font-light text-xl dark:text-sky-700 text-sky-900'>Frontend</h1>
                    
                    <div className='bg-sky-900 w-20 h-20 p-5 top-[-45px] left-1/2 ml-[-40px] absolute inline-block rounded-full'>
                      <BsBrush className="inline text-white dark:text-black w-10 h-10"/>
                    </div>
                    
                    <ul className='dark:text-gray-400 text-gray-700'>
                      <li className='p-1'> <BsChevronRight className="inline dark:text-sky-700 text-sky-900"/> React/Vite</li>
                      <li className='p-1'> <BsChevronRight className="inline dark:text-sky-700 text-sky-900"/> Javascript</li>
                      <li className='p-1'> <BsChevronRight className="inline dark:text-sky-700 text-sky-900"/> HTML</li>
                      <li className='p-1'> <BsChevronRight className="inline dark:text-sky-700 text-sky-900"/> CSS</li>
                      <li className='p-1'> <BsChevronRight className="inline dark:text-sky-700 text-sky-900"/> JQuery</li>
                      <li className='p-1'> <BsChevronRight className="inline dark:text-sky-700 text-sky-900"/> Bootstrap</li>
                    </ul>


                </div>

                <div className=" w-1/4 m-5 p-7 h-full bg-white dark:bg-zinc-900 drop-shadow-2xl border-2 border-sky-900">
                  
                  <h1 className='text-center m-5 font-light text-xl dark:text-sky-700 text-sky-900 '>Backend</h1>

                  <div className='bg-sky-900 w-20 h-20 p-5 top-[-45px] left-1/2 ml-[-40px] absolute inline-block rounded-full'>
                    <BsDatabase className="inline  text-white dark:text-black w-10 h-10"/>
                  </div>

                  <ul className='dark:text-gray-400 text-gray-700'>

                      <li className='p-1'> <BsChevronRight className="inline dark:text-sky-700 text-sky-900"/> C#</li>
                      <li className='p-1'> <BsChevronRight className="inline dark:text-sky-700 text-sky-900"/> PHP</li>
                      <li className='p-1'> <BsChevronRight className="inline dark:text-sky-700 text-sky-900"/> VBA</li>
                      <li className='p-1'> <BsChevronRight className="inline dark:text-sky-700 text-sky-900"/> JAVA</li>
                      <li className='p-1'> <BsChevronRight className="inline dark:text-sky-700 text-sky-900"/> MySQL</li>
                      <li className='p-1'> <BsChevronRight className="inline dark:text-sky-700 text-sky-900"/> MongoDB</li>
                    </ul>


                </div>

                <div className="w-1/4 m-5 p-7 h-full bg-white dark:bg-zinc-900 drop-shadow-2xl border-2 border-sky-900">
                  <h1 className=' text-center m-5 font-light text-xl dark:text-sky-700 text-sky-900 '>Others</h1>
                  
                  <div className='bg-sky-900 w-20 h-20 p-5 top-[-45px] left-1/2 ml-[-40px] absolute inline-block rounded-full'>
                    <BsMotherboard className="inline text-white dark:text-black w-10 h-10"/>
                  </div>

                  <ul className='dark:text-gray-400 text-gray-700'>
                    <li className='p-1'> <BsChevronRight className="inline dark:text-sky-700 text-sky-900"/>Git/Github</li>
                    <li className='p-1'> <BsChevronRight className="inline dark:text-sky-700 text-sky-900"/>Jira</li>
                    <li className='p-1'> <BsChevronRight className="inline dark:text-sky-700 text-sky-900"/>Trello</li>
                    <li className='p-1'> <BsChevronRight className="inline dark:text-sky-700 text-sky-900"/>Agile</li>
                    <li className='p-1'> <BsChevronRight className="inline dark:text-sky-700 text-sky-900"/>Scrum & Agile </li>
                    <li className='p-1'> <BsChevronRight className="inline dark:text-sky-700 text-sky-900"/>MVVC</li>
                  </ul>

                </div>

              </div>

            </div>

          </section>

          {/* Projects */} 
          <section className='dark:text-gray-400 text-gray-700 flex items-center justify-center min-h-[40vh] pt-0  pb-[120px] z-0 relative' id="project">
              
            <div className="w-full">

              <h3 className="text-sky-900  font-light text-3xl uppercase mb-11 text-center block dark:text-sky-700"  >{t("projects.Title")}</h3>
              
              <div className='flex flex-wrap items-center justify-center text-black'>
              
                <Card
                  title={"Almeida Live Score"}
                />
                <Card
                  title={"ReManage - VBA"}
                />
                <Card
                  title={"ReManage - Web"}
                />

              </div>

            </div>



            
          </section>

          {/* Contact Me */}
          <section className='dark:text-gray-400 text-gray-700 flex items-center justify-center min-h-[40vh] pt-0  z-0 relative' id="contacts">
            <div className="w-full">
              <h3 className="text-sky-900  font-light text-3xl uppercase mb-11 text-center block dark:text-sky-700"  >{t("contacts.Title")}</h3> 

              <div className='flex flex-wrap items-center justify-center text-black'>
                  <Form/>
              </div>

            </div>
          </section>          

          <Footer></Footer>

        </div>

    </>
  )
}

export default App
