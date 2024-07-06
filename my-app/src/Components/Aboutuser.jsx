import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usericon from '../Images/usericon.png'
const Aboutuser = () => {
  const navigate = useNavigate();
  let [get_data, set_data] = useState({});

  const Deleteaccount = async () => {
    try {
      let todelete=false;
      todelete=window.confirm('Are you sure to delete your account');
      if(!todelete){return;}
      const response = await fetch(`/deleteaccountb/${get_data._id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "appication/json",
        },
        credentials: "include",
      });

      if (response.status === 200) {
        navigate("/signup");
      }
    } catch (err) {
      console.log(err);
      console.log(
        "Error at front Itemcard.jsx while deleting the item is occured"
      );
    }
  };

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
      let data = await response.json();
      set_data(data);
    } catch (err) {
      console.log(err);
      navigate("/signin");
    }
  };

  useEffect(() => {
    callAvailablePage();
  }, []);

  return (
    <>
      <div >
        <div className="card mx-auto" style={{ width: "15rem", border: "none" }}>
          <img
            src={usericon}
            className="card-img-top m-3"
            alt="..."

            style={{ borderRadius: "50%" ,border:'5px solid black'}}
          />
          <div className="card-body">
            <h5 className="card-title center bold">
              <span className="bold"></span>Name :{" "}
              <span className="text-success">{get_data.name}</span>
            </h5>
            <h5 className="card-title center bold">
              <span className="bold"></span>Email :{" "}
              <span className="text-success">{get_data.email}</span>
            </h5>
            <h5 className="card-title center bold">
              <span className="bold"></span>Phone :{" "}
              <span className="text-success">{get_data.phone}</span>
            </h5>
          </div>
        <button
          type="button"
          className="text-secondary"
          style={{border:'none',backgroundColor:'white'}}
          onClick={() => {
            Deleteaccount();
          }}
        >
          Delete Account
        </button>
        </div>
        <br/>
        <br/>
        <br/>
      </div>
    </>
  );
};
export default Aboutuser;
