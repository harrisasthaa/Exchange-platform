import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import login_image from "../Images/login_image(gren).jpg";
const Signin = () => {
  const navigate = useNavigate();
  let [logindata, setlogindata] = useState({
    email: "",
    password: "",
  });

  const Inputhandler = (event) => {
    let { name, value } = event.target;
    setlogindata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const postdata = async (event) => {
    try {
      event.preventDefault();
      let { email, password } = logindata;
      
      const response = await fetch("/signinb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = response;
      if (data.status === 422 || !data) {
        window.alert("Please fill VALID details");
        console.log("Login Failed");
      } else {
        window.alert("Successfull LOGIN");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      console.log(
        "Error is at signin page (somewhere in front end while fetching api"
      );
    }
  };

  return (
    <>
      <div className="page_container">
        <div className="all_of_content_form">
          <h1 className="bold center heading1">Sign In</h1>
          <div className="super_form_container">
            <form action="" className="form_container">
              <div className="form_element">
                <EmailIcon />
                <input
                  className="input_element"
                  type="email"
                  name="email"
                  placeholder="Enter you Email id"
                  autoComplete="off"
                  value={logindata.email}
                  onChange={Inputhandler}
                />
              </div>
              <div className="form_element">
                <KeyIcon />
                <input
                  className="input_element"
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  value={logindata.password}
                  onChange={Inputhandler}
                />
              </div>

              <button
                className="form_submit_btn"
                type="submit"
                onClick={postdata}
              >
                Submit
              </button>
            </form>
            <div className="cartoonistic_image_container">
              <img
                className="cartoonistic_image"
                src={login_image}
                alt="signup"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signin;
