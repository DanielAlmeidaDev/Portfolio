import React  from 'react';

const Button = ({ className , text , id , target }) => {

    return (
        <>
            <button className={className} id={id} data-target={target} > {text} </button>
        </>
    );
  };

export default Button;