import React, { useState }  from 'react';
import axios from 'axios';




const Form = () => {

    const [formData, setFormData] = useState({ firstName: '', lastName: '', phoneNumber: '', email: '' , message: '' });

    const handleSubmit = async(e) =>{

        e.preventDefault();

        try{
            const response = await axios.post(import.meta.env.VITE_API_URL + "/api/sendEmail", formData);
            console.log(response.data);

        }catch(error){
            console.error(error);
        }

    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    return (
        <>
            <form onSubmit={handleSubmit} class="w-2/3 mb-[60px] p-[70px] pb-[40px] bg-white dark:bg-zinc-900 border-2 border-sky-900"  method='post'>
            
                <div className='lg:flex justify-center md:block'>
                    <div className='mb-2 lg:mr-2 lg:w-1/2 md:w-full md:mr-0' >
                        <input 
                        type="text" 
                        className='p-5 w-full dark:text-gray-400 border-sky-900 dark:bg-transparent dark:placeholder:text-gray-500 placeholder:text-sky-900 placeholder:font-bold outline-none  focus:border-sky-600 border-2 focus:ease-in-out focus:duration-300' 
                        placeholder='First Name'
                        value={formData.firstName}
                        onChange={handleChange} 
                        name="firstName" 
                        id="firstName" />
                    </div>

                    <div className='mb-2 lg:w-1/2 md:w-full'>
                        <input type="text"     
                        value={formData.lastName}
                        onChange={handleChange} 
                        className='p-5 w-full dark:text-white border-sky-900 dark:bg-transparent dark:placeholder:text-gray-500 placeholder:text-sky-900 placeholder:font-bold outline-none focus:border-sky-600 border-2 focus:ease-in-out focus:duration-300'
                        placeholder='Last Name' 
                        name="lastName" 
                        id="lastName" />
                    </div>
                </div>

                <div className='lg:flex justify-center md:block'>
                    <div className='mb-2 lg:mr-2 lg:w-1/2 md:w-full md:mr-0'>
                        <input type="text" 
                        className='p-5 w-full dark:text-white border-sky-900 dark:bg-transparent dark:placeholder:text-gray-500 placeholder:text-sky-900 placeholder:font-bold outline-none focus:border-sky-600 border-2 focus:ease-in-out focus:duration-300' 
                        placeholder='Phone' 
                        name="phoneNumber" 
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange} 
                         />
                    </div>

                    <div className='mb-2 lg:w-1/2 md:w-full'>
                        <input type="text"
                         className='p-5 w-full dark:text-white border-sky-900 dark:bg-transparent dark:placeholder:text-gray-500 placeholder:text-sky-900 placeholder:font-bold outline-none focus:border-sky-600 border-2 focus:ease-in-out focus:duration-300' 
                         placeholder='Email' 
                         name="email"
                         id="email"
                         value={formData.email}
                         onChange={handleChange}  />
                    </div>
                </div>
                <div>
                    <textarea 
                    className='w-full p-5 dark:bg-transparent dark:text-white border-sky-900 dark:placeholder:text-gray-500 placeholder:text-sky-900 placeholder:font-bold outline-none focus:border-sky-600 border-2 focus:ease-in-out focus:duration-300' 
                    placeholder='Message' 
                    name="message" 
                    id="message" 
                    cols="30" 
                    rows="10"
                    value={formData.textarea}
                    onChange={handleChange}
                    >  
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