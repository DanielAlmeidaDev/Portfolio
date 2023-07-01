import React  from 'react';

const Section = ({ html}) => {

    return (
        <>
            <section className='dark:text-gray-400 text-gray-700 flex items-center justify-center p-24 pt-0 min-h-[80vh] pb-[120px] z-0 relative'>

                {html}

            </section>
        </>
    );
  };

export default Section;