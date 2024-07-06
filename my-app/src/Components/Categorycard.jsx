import React from "react";
import { Link } from "react-router-dom";
import engneering_instrument from "../Images/engneering_instruments.JPG";
import fec_related from "../Images/fec_related.JPG";
import electronics from "../Images/electronics.JPG";
import miscellaneous from "../Images/miscellaneous.JPG";

const Categorycard = (props) => {
  let pic;
  console.log(props.roll);
  if(props.roll===1)pic=engneering_instrument;
  else if(props.roll===2)pic=fec_related;
  else if(props.roll===3)pic=electronics;
  else pic=miscellaneous;
  return (
    <>
      
      <div className="card mb-3 catcard">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={pic} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.header}</h5>
              <p className="card-text">
                {props.content}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {props.items}
                </small>
              </p>
              <Link to={props.link} className="btn btn-outline-success px-5" style={{borderRadius:'20px'}} role="button" aria-pressed="true" >Get this</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Categorycard;
