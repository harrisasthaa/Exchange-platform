import React from "react";
import Error1 from "../Images/Error.JPG";
const Error = () => {
  return (
    <>
      <h1 className="center" style={{ fontWeight:'bolder' }}>
        This Page is not available on this website
      </h1>
      <div className='center' style={{ width: "90vw" }}>
        <img style={{ width: "90vw" ,maxWidth:'500px' }} src={Error1} alt="error404" />
      </div>
    </>
  );
};
export default Error;
