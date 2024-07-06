import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import home_page_image from "../Images/home_image.jpg";
const Home = () => {
  let [toshow, set_toshow] = useState(true);
  const callAvailablePage = async () => {
    try {
      const response = await fetch("/profileb", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "appication/json",
        },
        credentials: "include",
      });
      

      if (response.status === 200) {
        set_toshow(false);
      }
    } catch (err) {
      console.log(err);
  
    }
  };

  useEffect(() => {
    callAvailablePage();
  }, []);

  return (
    <>
      <div className="all_content_home">
        <div className="general_container">
          <div className="homeimage_con">
            <img
              className="cartoonistic_image_home"
              src={home_page_image}
              alt="Home Page"
            />
          </div>
          <div className="form_container">
            <h1 className="bold center ">
              Lets Collaborate With your Friends on{" "}
              <span className="blue">ExEngg</span>
            </h1>
            <h2 className="center">
              and save your Time and Money Even you can Earn
            </h2>
            <p className="center">
              <strong>How??</strong>
              <br />
              We are providing you an interface where you can exchange your
              engneering stuffs like drafter ,Labcoat , Scientific Calculator,
              Laptops etc. Also you can earn on our website , We provide you the
              list of all the work that someone at you college want to complete
              like Graphic Designing , Web Development , App Development,
              Assignment , EG sheets etc . you can complete these task for them
              and earn good money.
            </p>

            {toshow ? (
              <div>
                <Link to="/signin">
                  <button className="general_btn">Sign In</button>
                </Link>
                <Link to="/signup">
                  <button className="general_btn">Sign Up</button>
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
