import React  from 'react';

const Icon = ({ icon, link, className }) => {

    return (
        <>
            <a className={className}  href={link} target='_blank'>
                {icon}
            </a>
        </>
    );
  };

export default Icon;