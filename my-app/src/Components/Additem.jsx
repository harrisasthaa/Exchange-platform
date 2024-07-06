import React, { useState, useEffect } from "react";
import add_item_image from "../Images/add_item_image.jpg";
import CategoryIcon from "@mui/icons-material/Category";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DescriptionIcon from "@mui/icons-material/Description";
import TitleIcon from "@mui/icons-material/Title";
import { useNavigate } from "react-router-dom";
const Additem = () => {
  const navigate = useNavigate();
  let [userinfo, set_userinfo] = useState({});
  let [product_obj, set_pro_obj] = useState({
    category: "Miscellaneous",
    tittle: "",
    description: "",
    price: "",
    image: null,
  });
  const changing = (event) => {
    let { name, value } = event.target;
    if (name === "image") {
      set_pro_obj((prevval) => {
        return {
          ...prevval,
          [name]: event.target.files[0],
        };
      });
    } else {
      set_pro_obj((prevval) => {
        return {
          ...prevval,
          [name]: value,
        };
      });
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
      const data = await response.json();
      set_userinfo(data);
      console.log(response);
    } catch (err) {
      console.log(err);
      navigate("/signin");
    }
  };

  useEffect(() => {
    callAvailablePage();
  }, []);

  const submitted = async (event) => {
    try {
      event.preventDefault();
      let { name, email, phone } = userinfo;
      let { category, tittle, description, price, image } = product_obj;
      if(!category || !tittle || !description || !price || !image){
        window.alert("Please fill ALL fields properly");
        return;
      }
      else if(image===null){
        window.alert("Please ADD image properly");
        return;
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("category", category);
      formData.append("tittle", tittle);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("image", image);

      const response = await fetch("/additemb", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.status === 422 || !data) {
        window.alert("Please fill all the field properly");
        console.log("Item not added due to some error");
      } else {
        window.alert("Item added successfully");
        console.log("Item added successfully");
        navigate("/myitems");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="page_container">
        <div className="all_of_content_form">
          <h1 className="bold center heading1">Add Item</h1>
          <div className="super_form_container">
            <form
              method="POST"
              className="form_container"
              onSubmit={submitted}
              encType="multipart/form-data"
            >
              <div className="form_element">
                <CategoryIcon />
                <select
                  className="input_element"
                  name="category"
                  id="category"
                  placeholder="Select Category"
                  onChange={changing}
                >
                  <option value="Miscellaneous">Miscellaneous</option>
                  <option value="Book">Book</option>
                  <option value="Drafter">Drafter</option>
                  <option value="Labcoat">Labcoat</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Scientific Calculator">
                    Scientific Calculator
                  </option>
                  <option value="Yoga Mat">Yoga Mat</option>
                </select>
              </div>

              <div className="form_element">
                <TitleIcon />
                <input
                  className="input_element"
                  type="text"
                  name="tittle"
                  placeholder="Enter product tittle"
                  onChange={changing}
                />
              </div>

              <div className="form_element">
                <DescriptionIcon />
                <textarea
                  className="input_element"
                  name="description"
                  id=""
                  cols="30"
                  rows="1"
                  placeholder="Enter product description"
                  onChange={changing}
                ></textarea>
              </div>

              <div className="form_element">
                <CurrencyRupeeIcon />
                <input
                  className="input_element"
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  onChange={changing}
                />
              </div>

              <div className="form_element" style={{border:'none'}}>
               <span className="bold pe-2">Upload photo : </span>
                <input type="file" name="image" onChange={changing}  />
              </div>

              <button className="form_submit_btn" type="submit">
                Add
              </button>
            </form>
            <div className="cartoonistic_image_container">
              <img
                className="cartoonistic_image"
                src={add_item_image}
                alt="Add item"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Additem;
