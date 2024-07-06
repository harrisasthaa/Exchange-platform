import React from "react";
import harsh_nagar_photo from '../Images/harsh_nagar_photo.jpeg';
import harsh_sharma_photo from '../Images/harsh_sharma_photo.jpeg';
import harsh_kumar_photo from '../Images/harsh_kumar_photo.jpeg';
import harsh_raghu_photo from '../Images/harsh_raghu_photo.jpeg';

const Profilecard = (props) => {
  let temp;
  if(props.id==="1")temp=harsh_sharma_photo;
  else if(props.id==='2')temp=harsh_kumar_photo;
  else if(props.id==='3')temp=harsh_nagar_photo;
  else temp=harsh_raghu_photo;
  return (
    <>
      <div className="card mx-auto" style={{width: '15rem',border:"none"}}>
        <img src={temp} className="card-img-top m-3" alt="..." style={{borderRadius:'100px'}} />
        <div className="card-body">
          <h5 className="card-title center">{props.name}</h5>
          <h6 className="card-text center">({props.designation})</h6>
          <p className="card-text center">
            {props.intro}
          </p>
          <div className="center">

          <a href={props.link} className="btn btn-primary px-1 py-0" style={{fontWeight:'700',borderRadius:'8px'}}>
            in
          </a>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};
export default Profilecard;
