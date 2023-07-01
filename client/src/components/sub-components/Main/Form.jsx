import React  from 'react';

const Form = () => {

    return (
        <>
            <form class="w-2/3 mb-[60px] p-[70px] pb-[40px] bg-white dark:bg-zinc-900 border-2 border-sky-900 ">
            
                <div className='flex justify-center'>
                    <div className='mb-2 mr-2 w-1/2'>
                        <input type="text" className='p-5 w-full dark:text-gray-400 border-sky-900 dark:bg-transparent dark:placeholder:text-gray-500 placeholder:text-sky-900 placeholder:font-bold outline-none  focus:border-sky-600 border-2 focus:ease-in-out focus:duration-300' placeholder='First Name' name="" id="" />
                    </div>

                    <div className='mb-2 w-1/2'>
                        <input type="text" className='p-5 w-full dark:text-white border-sky-900 dark:bg-transparent dark:placeholder:text-gray-500 placeholder:text-sky-900 placeholder:font-bold outline-none focus:border-sky-600 border-2 focus:ease-in-out focus:duration-300' placeholder='Last Name' name="" id="" />
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='mb-2 mr-2 w-1/2'>
                        <input type="text" className='p-5 w-full dark:text-white border-sky-900 dark:bg-transparent dark:placeholder:text-gray-500 placeholder:text-sky-900 placeholder:font-bold outline-none focus:border-sky-600 border-2 focus:ease-in-out focus:duration-300' placeholder='Phone' name="" id="" />
                    </div>

                    <div className='mb-2 w-1/2'>
                        <input type="text" className='p-5 w-full dark:text-white border-sky-900 dark:bg-transparent dark:placeholder:text-gray-500 placeholder:text-sky-900 placeholder:font-bold outline-none focus:border-sky-600 border-2 focus:ease-in-out focus:duration-300' placeholder='Email' name="" id="" />
                    </div>
                </div>
                <div>
                    <textarea className='w-full p-5 dark:bg-transparent dark:text-white border-sky-900 dark:placeholder:text-gray-500 placeholder:text-sky-900 placeholder:font-bold outline-none focus:border-sky-600 border-2 focus:ease-in-out focus:duration-300' placeholder='Message' name="" id="" cols="30" rows="10">  
                    </textarea>
                </div>

                <div className='flex justify-center w-full my-3'> 
                    <input type="submit" value="Send" className='text-white text-center mx-auto border-sky-900 rounded-md bg-sky-900 p-3 w-2/3 font-bold cursor-pointer  hover:bg-transparent border-2 dark:hover:text-sky-700 hover:text-sky-950 ease-in-out duration-300' />
                </div>
                

            </form>
        </>
    );
  };

export default Form;