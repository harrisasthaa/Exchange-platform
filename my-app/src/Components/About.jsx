import React from "react";
import Profilecard from "./Profilecard";
const arrobj = [
  {
    key: "4",
    name: "Harsh Raghuvanshi",
    designation: "Web developer",
    intro:
      "Pursuing Information Technology currently in 3rd year ,Developer(MERN) of ExEngg website ",
    link: "https://www.linkedin.com/in/harsh-raghuvanshi-a89bb8232/",
    ourphoto:'harsh_raghu_photo'
  },
  {
    key: "1",
    name: "Harsh Sharma",
    designation: "App Developer",
    intro:
      "Pursuing Software Engneering currently in 3rd year , Developer(Flutter & Firebase) of ExEngg app ",
    link: "https://www.linkedin.com/in/harsh1224/",
    ourphoto:'harsh_sharma_photo'
  },
  {
    key: "2",
    name: "Harsh Kumar",
    designation: "UI/UX designer",
    intro:
      "Pursuing Software Engneering currently in 3rd year , Designed UI/UX for our App",
    link: "https://www.linkedin.com/in/harsh-kumar-38a14422a/",
    ourphoto:'harsh_kumar_photo'
  },
  {
    key: "3",
    name: "Harsh Nagar",
    designation: "DGM & Marketing",
    intro:
      "Pursuing Software Engneering currently in 3rd year , Manages all social media platform and Queries about exengg",
    link: "https://www.linkedin.com/in/harsh-nagar-77319722a/",
    ourphoto:'harsh_nagar_photo'
  },
  
];
const About = () => {
  return (
    <>
      <h1 className="center mb-4">About Us</h1>

      <div className="container">
        <div className="row px-auto about_target">
          {arrobj.map((el, ind) => {
            return (
              <div className="col m-3">
                <Profilecard
                  key={ind}
                  id={el.key}
                  name={el.name}
                  designation={el.designation}
                  intro={el.intro}
                  link={el.link}
                  ourphoto={el.ourphoto}
                />
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="intropara mx-5 my-5">
        <h1 className="center"> Who we are ?</h1>
        <p className="center">
          We are trying to solve a real life problem ,During semester swap in
          first year our subjects also get changed due to which engineering
          instruments used in that subject study also changes so instead of
          purchasing new instruments for just 4 months students of college try
          to exchange these stuffs. But they face difficulty since they are in
          different batches so we build an platfrom where you have to just
          upload you item which you want to exchange or even sell along with a
          photo. As soon as you upload it become visible to all the members of
          exengg and if some one is willing to take that item from you he/she
          will contact with . After both parties agree on "sell or exchange" you
          have to directly handover that item to purchaser or exchanger in
          college and remove item from the app. We always keep your privacy and
          ensure any kind of user details not get public.
        </p>
      </div>
    </>
  );
};
export default About;
