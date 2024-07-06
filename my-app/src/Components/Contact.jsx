import React, { useState } from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  let [registerdata, set_registerdata] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const Inputhandler = (event) => {
    let { name, value } = event.target;

    set_registerdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const submitted = async (event) => {
    try {
      event.preventDefault();
      let { name, email, feedback } = registerdata;
      const response = await fetch("/contactb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, feedback }),
      });

      const data = await response.json();
      if (data.status === 422 || !data) {
        window.alert("Please fill ALL fields properly");
      } 
      else if(data.status===400){
        window.alert("Something went WRONG");
      }else {
        window.alert("Submitted SUCCESSFULLY");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="page_container">
        <div className="all_of_content_form">
          <h1 className="bold center heading1">Get In Touch / (Feedback)</h1>
          <div className="super_form_container">
            <form method="POST" className="form_container" onSubmit={submitted}>
              <div className="form_element">
                <PersonIcon />
                <input
                  className="input_element"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="off"
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
                  onChange={Inputhandler}
                />
              </div>

              <div className="form_element">
                <DescriptionIcon />
                <textarea
                  className="input_element"
                  name="feedback"
                  id=""
                  cols="30"
                  rows="1"
                  placeholder="Write our FeedBack/ Query / Complain etc..."
                  onChange={Inputhandler}
                ></textarea>
              </div>
              <button className="form_submit_btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
