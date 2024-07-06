import React, { useEffect, useState } from "react";
import Itemcard from "./Itemcard";

import { useNavigate } from "react-router-dom";
const Available = (props) => {
  const navigate = useNavigate();
  let [arrayofobj, set_arrayofobj] = useState([]);
  let [get_data, set_data] = useState({});

  const callAvailablePage = async () => {
    try {
      const response1 = await fetch("/profileb", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "appication/json",
        },
        credentials: "include",
      });
      let data1 = await response1.json();
      set_data(data1);

      const response = await fetch("/availableb", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "appication/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      set_arrayofobj(data);

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
      <h1 className="center">{props.heading}</h1>
      <div className="container" style={{minHeight:'70vh'}}>
        <div className="row">
          
            {arrayofobj.map((element, index) => {
              let {
                _id,
                name,
                email,
                phone,
                category,
                tittle,
                description,
                price,
                filename,
                path,
              } = element;
              if (props.heading === "Engineering Goods") {
                return  props.heading === "Engineering Goods" &&
                  (category === "Drafter" ||
                    category === "Labcoat" ||
                    category === "Book") ? (
                  <Itemcard
                    key={index}
                    name={name}
                    email={email}
                    phone={phone}
                    category={category}
                    tittle={tittle}
                    description={description}
                    price={price}
                    filename={filename}
                    source={path}
                    _id={get_data.email === email ? _id : null}
                  />
                ) : null;
                  
              } else if (props.heading === "Electronics") {
                return props.heading === "Electronics" &&
                  (category === "Scientific Calculator" ||
                    category === "Laptop") ? (
                  <Itemcard
                    key={index}
                    name={name}
                    email={email}
                    phone={phone}
                    category={category}
                    tittle={tittle}
                    description={description}
                    price={price}
                    filename={filename}
                    source={path}
                    _id={get_data.email === email ? _id : null}
                  />
                ) : null;
              } else if (props.heading === "Fec Related") {
                return props.heading === "Fec Related" &&
                  (category === "Yoga Mat" || category === "Sports item") ? (
                  <Itemcard
                    key={index}
                    name={name}
                    email={email}
                    phone={phone}
                    category={category}
                    tittle={tittle}
                    description={description}
                    price={price}
                    filename={filename}
                    source={path}
                    _id={get_data.email === email ? _id : null}
                  />
                ) : null;
              } else if (props.heading === "Miscellaneous") {
                return props.heading === "Miscellaneous" &&
                  (category === "Miscellaneous" ||
                    category === "Sports item") ? (
                  <Itemcard
                    key={index}
                    name={name}
                    email={email}
                    phone={phone}
                    category={category}
                    tittle={tittle}
                    description={description}
                    price={price}
                    filename={filename}
                    source={path}
                    _id={get_data.email === email ? _id : null}
                  />
                ) : null;
              } else if (props.heading === "My Items") {
                return email === get_data.email ? (
                  <Itemcard
                    key={index}
                    name={name}
                    email={email}
                    phone={phone}
                    category={category}
                    tittle={tittle}
                    description={description}
                    price={price}
                    filename={filename}
                    source={path}
                    _id={get_data.email === email ? _id : null}
                  />
                ) : null;
              } else return null;
            })}
          
        </div>
      </div>
    </>
  );
};
export default Available;
