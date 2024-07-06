import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const callAvailablePage = async () => {
    try {
      const response = await fetch("/logoutb", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "appication/json",
        },
        credentials: "include",
      });
      
      if(response.status===200)navigate('/signin');
      
    } catch (err) {
        navigate('/signin');
        console.log(err);
    }
  };

  useEffect(() => {
    callAvailablePage();
  }, []);

  return (
    <>
      <h1>You have to login first</h1>
    </>
  );
};
export default Logout;
