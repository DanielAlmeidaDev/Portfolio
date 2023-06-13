import React, { useState, useEffect } from 'react';
import ReactFlagsSelect from "react-flags-select";
import Logo from "../img/Banner.webp";

import { BsList , BsMoon, BsSun , BsX } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

function NavBar() {

    const [selected, setSelected] = useState(localStorage.getItem('selectedLanguage') || "PT");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, i18n } = useTranslation("global");

    //Change Toogle Menu
    const toggleMenu = () => {
        
        setIsMenuOpen(!isMenuOpen);
    };

    //Change Language
    const changeLanguage = (lng) => {

        setSelected(lng);
        i18n.changeLanguage(lng);
        localStorage.setItem('selectedLanguage', lng);
    };

    //All combos If(s)
    const themeMode = (value) =>{

        let check = document.querySelectorAll("#themeMode");

        for (const iterator of check) {
            iterator.checked = value;
        }
    }

    //All Icons If(s)
    const icons = () =>{

        let suns = document.querySelectorAll("#sun");
        let moons = document.querySelectorAll("#moon");

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) && localStorage.getItem("theme") === 'dark') {
            
            for (const sun of suns) {
                sun.classList.add("hidden")
            }

            for (const moon of moons) {
                moon.classList.remove("hidden")
            }

        }
        else{

            for (const sun of suns) {
                sun.classList.remove("hidden")
            }

            for (const moon of moons) {
                moon.classList.add("hidden")
            }
        }

    }

    const theme = () =>{
        
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) && localStorage.getItem("theme") === 'dark') {
    
            themeMode(true);
            document.documentElement.classList.add('dark');
            icons();

        } else {

            themeMode(false);
            document.documentElement.classList.remove('dark')
            icons();
        }
    
    };

    const changeTheme = (value) =>{
        
        let i = 1;

        for (const iterator of document.querySelectorAll("#themeMode")) {
            
            console.log(iterator.dataset.check == value);
            
            if(iterator.dataset.check == value){
                
                console.log(iterator.dataset.check);

                if(!iterator.checked){
                    document.documentElement.classList.remove('dark')
                    localStorage.setItem("theme", "white")
                    icons();

                }else{
                    document.documentElement.classList.add('dark')
                    localStorage.setItem("theme", "dark");
                    icons();
                }

            }

            i++;
        }


        // if(!document.getElementById("themeMode").checked){

        //     document.documentElement.classList.remove('dark')
        //     localStorage.setItem("theme", "white")
        //     icons();

        // }else{
        //     document.documentElement.classList.add('dark')
        //     localStorage.setItem("theme", "dark");
        //     icons();
        // }

    }

    useEffect(() => {
        
        //Theme Mode
        theme()

        //Menu System
        const closeMenu = () => {

            let pcMenu = document.getElementById("pcMenu");
            let mobile = document.getElementById("mobile");


            if(window.innerWidth < 1436){                
                
                pcMenu.classList.remove("grid");
                pcMenu.classList.add("hidden");

                mobile.classList.add("grid");
                mobile.classList.remove("hidden");                 
                
            }else{

                pcMenu.classList.add("grid");
                pcMenu.classList.remove("hidden"); 

                mobile.classList.remove("grid");
                mobile.classList.add("hidden");
            }

            theme();            
            setIsMenuOpen(false);
        };

        //Resize Banner Size
        const resizeBanner = () =>{


            let banner = document.getElementById("banner");

            if(window.innerWidth < 1253){  
                
                banner.classList.remove("h-28");
                banner.classList.add("h-20");

            }else{

                banner.classList.add("h-28");
                banner.classList.remove("h-20");

            }

            theme();

        }

        closeMenu();
        resizeBanner();
        changeLanguage("PT");

        window.addEventListener("resize", ()=>{

            closeMenu();

        });

        //Language
        changeLanguage(selected);

        return () => {
            window.removeEventListener("resize", closeMenu);
        };

    }, []);

    return (

        <>
            <nav className="flex fixed bg-white drop-shadow-sm w-full p-6 dark:bg-zinc-800 z-10">

                <div className='w-1/2'>
                    <img src={Logo} className='align-middle h-10 ml-8 p-0' id='banner' alt='Banner' />
                </div>


                <div className='w-1/2 grid content-center ' id='pcMenu'>
                    
                    <ul className='inline-block align-middle w-full h-full text-right'>

                        <li className='inline text-xs font-bold uppercase m-3 align-middle p-2 ease-out duration-300 text-sky-900  hover:text-teal-800'>
                            <a  href="#">{t("navbar.Home")}</a>
                        </li>

                        <li className='inline text-xs font-bold text-gray-400 uppercase m-3 align-middle p-2 dark:text-white ease-out duration-300 hover:text-sky-900  hover:drop-shadow-lg'>
                            <a   href="#about">{t("navbar.AboutUs")}</a>
                        </li>

                        <li className='inline text-xs font-bold text-gray-400 uppercase m-3 align-middle p-2 dark:text-white ease-out duration-300 hover:text-sky-900  hover:drop-shadow-lg'>
                            <a href="#skills">{t("navbar.Skills")}</a>
                        </li>

                        <li className='inline text-xs font-bold text-gray-400 uppercase m-3 align-middle p-2 dark:text-white ease-out duration-300 hover:text-sky-900  hover:drop-shadow-lg'>
                            <a  href="#project">{t("navbar.Projects")}</a>
                        </li>

                        <li className='inline text-xs font-bold text-gray-400 uppercase m-3 align-middle p-2 dark:text-white ease-out duration-300 hover:text-sky-900  hover:drop-shadow-lg'>
                            <a  href="#contacts">{t("navbar.ContactMe")}</a>
                        </li>

                        <li className='inline align-middle ml-10 mr-2 dark:text-white'>                    
                            <ReactFlagsSelect
                                className='dark:text-white'
                                countries={["GB", "PT"]}
                                customLabels={{ GB: "EN-GB", PT: "PT-PT" }}
                                alignOptionsToRight={true}
                                selected={selected}
                                onSelect={(code) =>(changeLanguage(code))} 
                                selectedSize={15}
                                fullWidth={false}
                                optionsSize={15}
                                showSelectedLabel={false}
                                showOptionLabel={false}
                            /> 
                        </li>
                        <li className='inline text-xs font-bold text-gray-400 uppercase m-3 align-middle p-2 mr-8 dark:text-white ease-out duration-300 hover:text-sky-900  hover:drop-shadow-lg'>
                        
                            <label className="relative inline-flex items-center cursor-pointer">
           
                                <input type="checkbox" id='themeMode' value="" className="sr-only peer" onClick={() => changeTheme(1)} data-check="1" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-900  rounded-full peer dark:bg-sky-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-800"></div>
                                <span className="ml-3 text-sm font-medium text-gray-400 dark:text-white">

                                  <BsSun id="sun"></BsSun>
                                  <BsMoon className='hidden' id="moon"></BsMoon>
                                     
                                </span>
                            </label>

                        </li>                  
                    </ul>


                </div>


                <div className='hidden w-1/2 content-center ' id="mobile">
                    <ul className='inline-block align-middle w-full h-full text-right' id='mobiteMenu'>
                        <li className='text-xl inline  font-bold uppercase m-3 align-middle p-2'> 
                            <BsList className='float-right mr-8 align-middle ease-out duration-300 text-black dark:text-white hover:text-sky-900' onClick={toggleMenu} />
                        </li>

                    </ul>
                </div>
            </nav>

            <div className={`bg-white dark:bg-zinc-800 top-0 right-0 uppercase text-gray-400 z-50 h-full fixed w-full p-6
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300` }
            id='mobileMenu'>

                <ul className='z-50'>

                    <li className='pr-2 p-11 ml-8  border-b-2 dark:border-gray-500'>
                        <BsX className='float-right mr-8 align-middle ease-out duration-300 text-black dark:text-white hover:text-sky-900 ' onClick={toggleMenu} />
                    </li>

                    <li className='p-4 ml-8 mr-8 border-b-2 dark:border-gray-500'>
                      <a href="#" className='hover:text-sky-900 ease-out duration-300'>{t("navbar.Home")}</a>  
                    </li>
                    <li className='p-4 ml-8 mr-8 border-b-2 dark:border-gray-500'>
                      <a href="#" className='hover:text-sky-900 ease-out duration-300'>{t("navbar.AboutUs")}</a>  
                    </li>
                    <li className='p-4 ml-8 mr-8 border-b-2 dark:border-gray-500'  >
                        <a href="#" className='hover:text-sky-900 ease-out duration-300'>{t("navbar.Skills")}</a>
                    </li>
                    <li className='p-4 ml-8 mr-8 border-b-2 dark:border-gray-500'>
                        <a href="#" className='hover:text-sky-900 ease-out duration-300'>{t("navbar.Projects")}</a>
                    </li>
                    <li className='p-4 ml-8 mr-8 border-b-2 dark:border-gray-500'>
                        <a href="#" className='hover:text-sky-900 ease-out duration-300'>{t("navbar.ContactMe")}</a>
                    </li>
                    <li className='p-4 ml-8 mr-8border-b-2'>                    
                            <ReactFlagsSelect
                                countries={["GB", "PT"]}
                                customLabels={{ GB: "EN-GB", PT: "PT-PT" }}
                                alignOptionsToRight={true}
                                selected={selected}
                                defaultCountry="GB"
                                onSelect={(code) =>(changeLanguage(code))} 
                                selectedSize={15}
                                fullWidth={false}
                                optionsSize={15}
                                showSelectedLabel={false}
                                showOptionLabel={true}
                            /> 
                    </li>
                    
                    <li className='p-4 ml-8 mr-8 '>

                    <label className="relative inline-flex items-center cursor-pointer">
           
                            <input type="checkbox" id='themeMode' value="" className="sr-only peer" data-check="2"  onChange={() => changeTheme(2)} />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-900  rounded-full peer dark:bg-sky-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-800"></div>
                            <span className="ml-3 text-sm font-medium text-gray-400 dark:text-white">

                                <BsSun id="sun"></BsSun>
                                <BsMoon className='hidden' id="moon"></BsMoon>
                                    
                            </span>
                        </label>
                    </li>

                </ul>

            </div>
                               

        </>

    )

}

export default NavBar;
