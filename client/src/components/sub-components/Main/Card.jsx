import React  from 'react';

const Card = ({ title , tags, miniDescription, qualities}) => {

    return (
        <>

            <div class="lg:w-1/4 sm:w-full md:w-full w-full  p-7 h-full">

                <div class="border-sky-900 border-2 drop-shadow-2xl  bg-white dark:bg-zinc-900 bg-opacity-25 rounded-sm p-6 dark:text-gray-400 text-gray-700 relative z-10 pointer-events-auto">

                    <div class="flex flex-wrap items-center">

                        <div class="flex w-full h-48 md:h-64 lg:h-72 relative">

                            <div class="w-full relative">
                                  <img src="https://stackdiary.com/140x100.png" class="w-full h-full object-cover object-top rounded-lg bg-white" />                                      
                            </div>
                                                                
                                                              
                        </div>
                                                                                                        
                        <div class="w-full pt-8 flex flex-col justify-between">
                                            
                            <div>
                                    
                                <h2 class="font-bold text-xl">{title}</h2>
                                                    
                                <div class="flex flex-wrap text-center pt-4 mb-2">
                                                                                            
                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-sky-900 text-gray-100">Tailwind CSS</div>                                               
                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-sky-900 text-gray-100">React</div>                                                     
                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-sky-900 text-gray-100">Next.js</div>
                                                                                    
                                </div>
                                                    
                                <p class="text-xs leading-relaxed dark:text-gray-400 text-gray-700">This revolutionary email design kit is going to transform the way in which you send modern emails.</p>
                                                                                    
                                <ul class="text-xs mt-4 list-disc list-inside dark:text-gray-400 text-gray-700 leading-relaxed">
                                                                                                    
                                    <li>Responsive</li>                                                         
                                    <li> Mobile-friendly</li>                          
                                    <li> Media queries</li>                                                             
                                    <li> 20MB of JavaScript</li>
                                                                                            
                                </ul>
                                                                            
                            </div>
                                            
                            <div class="w-full sm:flex-1 grid gap-4 grid-cols-2 pt-6">
                                                    
                                <a href="https://stackdiary.com/" target='_blank' 

                                class=" ease-out duration-300
                                      hover:bg-gray-200 hover:text-sky-800 hover:border-sky-800 flex items-center justify-center text-center relative 
                                        font-bold text-sm dark:hover:bg-sky-900 dark:hover:text-white dark:bg-gray-200 dark:text-sky-900 bg-sky-900 text-white px-8 py-3 rounded-lg shadow-lg 
                                        hover:shadow-none hover:opacity-75">Preview</a>
                                                                                                                                        
                                <button x-on:click="pay('Essential')" class="w-full block text-center relative dark:text-white border-sky-900 border-2 text-sky-900 font-bold text-sm bg-white dark:bg-sky-800 px-4 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">Source Code</button>
                                                                                                                                                
                            </div>
                                        
                        </div>

                    </div>

                </div>

            </div>

        </>
    );
  };

export default Card;