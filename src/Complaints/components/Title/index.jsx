import React from 'react';

function Title({ type, text }) {
  return (
    <>
      {
        (type === "h1" && <h1>{text}</h1>)
        ||
        (type === "h2" && <h2>{text}</h2>)
      }
    </>
  )
}

export default Title;
