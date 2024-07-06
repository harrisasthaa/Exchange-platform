import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Itemcard = (props) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  const removetheitem = async () => {
    try {
      const response = await fetch(`/removeitemb/${props._id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "appication/json",
        },
        credentials: "include",
      });

      if (response.status === 200) {
        window.alert("Your item is DELETED successfully ");
        handleRefresh();
      }
    } catch (err) {
      console.log(err);
      console.log(
        "Error at front Itemcard.jsx while deleting the item is occured"
      );
    }
  };
  // let port=process.env.PORT;
  const port=process.env.REACT_APP_BACKEND_PORT;
  let temp = `http://localhost:${port}/getimage/${props.filename}`;
  console.log(temp);
  return (
    <>
      <div className="col m-0">
        <div className="card" style={{ width: "18rem"}}>
          <img src={temp} className="card-img-top" alt="..." />
          <div className="card-body " >
            <p className="card-title bold">Uploader : {props.name}</p>
            <hr />
            <span style={{ color: "blue" }}>{props.category} </span>

            <span style={{ color: "green" }} className="ps-5">
              <CurrencyRupeeIcon />
              {props.price}
            </span>
            <hr />
            <h6 className="card-title">
              <span className="bold">Tittle :</span> {props.tittle}
            </h6>
            <p className="card-text">
              <span className="bold">Description :</span> {props.description}
            </p>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => {
                window.alert(`The Phone Number of UPLOADER is ${props.phone}`);
              }}
            >
              Get This
            </button>
            {props._id ? (
              <button
                type="button"
                className="btn btn-outline-danger ms-5"
                onClick={() => {
                  removetheitem();
                }}
              >
                Remove
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default Itemcard;
