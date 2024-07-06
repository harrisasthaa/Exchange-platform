import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PersonIcon from "@mui/icons-material/Person";
import signup_image from "../Images/signup_image.jpg";
const Signup = () => {
  const navigate = useNavigate();
  const [registerdata, setregisterdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const Inputhandler = (event) => {
    let { name, value } = event.target;

    setregisterdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const postdata = async (event) => {
    try {
      event.preventDefault();
      let { name, email, phone, password, confirmpassword } = registerdata;

      const response = await fetch("/signupb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, password, confirmpassword }),
      });

      const data = response;

      if (data.status === 422 || !data) {
        window.alert("Please fill ALL fields properly");
      } else if (data.status === 409) {
        window.alert("Passwords are NOT matching");
      } else if (data.status === 400) {
        window.alert("User with this DETAILS already exist");
      } else {
        window.alert(" Registration Successfull");
        console.log("Registration Successful");
        navigate("/signin");
      }
    } catch (err) {
      console.log(err);
      console.log(
        "Error at signup page (somewhere in frontend while fetch api)"
      );
    }
  };
  return (
    <>
      <div className="page_container">
        <div className="all_of_content_form">
          <h1 className="bold center heading1">Sign Up</h1>
          <div className="super_form_container">
            <form method="POST" className="form_container">
              <div className="form_element">
                <PersonIcon />
                <input
                  className="input_element"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="off"
                  value={registerdata.name}
                  onChange={Inputhandler}
                />
              </div>
              <div className="form_element">
                <PhoneAndroidIcon />
                <input
                  className="input_element"
                  type="number"
                  name="phone"
                  placeholder="Enter you mobile number"
                  autoComplete="off"
                  value={registerdata.phone}
                  onChange={Inputhandler}
                />
              </div>
              <div className="form_element">
                <EmailIcon />
                <input
                  className="input_element"
                  type="email"
                  name="email"
                  placeholder="Enter you Email id"
                  autoComplete="off"
                  value={registerdata.email}
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
                  value={registerdata.password}
                  onChange={Inputhandler}
                />
              </div>
              <div className="form_element">
                <KeyIcon />
                <input
                  className="input_element"
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm your Password"
                  value={registerdata.confirmpassword}
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
                src={signup_image}
                alt="signup"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
