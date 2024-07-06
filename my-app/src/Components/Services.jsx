import React from "react";
import Categorycard from "./Categorycard";

const arrayobj = [
  {
    id: 1,
    header: "Engineering goods",
    content:
      "Lorem ipsum dus dolorem iure minima cum voluptatibus deleniti,ritatis commodi",
    items: "Drafter ,Labcoat ,Scientific Calculator etc...",
    link: "/services/engineeringgoods",
    temp:"/Images/engneering_instruments.JPG"
  },
  {
    id: 2,
    header: "FEC related",
    content:
      "Lorem ipsum dolmole us dolorem iure minima cum voluptatibus deleniti,ritatis commodi",
    items: "Yoga mat, Bat ,T-shirst etc...",
    link: "/services/fecrelated",
    temp:"/Images/fec_related.JPG"
  },

  {
    id: 3,
    header: "Electronic",
    content:
      "Lorem ipsum dolor sit amet consectetur adipim nemo mole us dolorem iure minima cum voluptatibus deleniti,ritatis commodi",
    items: "Laptops, Mobile Phones, Charger etc...",
    link: "/services/electronics",
    temp:"/Images/electronics.JPG"
  },
  {
    id:4,
    header: "Miscellanous",
    content:
      "Lorem ipsum dolorus dolorem iure minima cum voluptatibus deleniti,ritatis commodi",
    items: "All item which misses above",
    link: "/services/miscellaneous",
    temp:"/Images/miscellaneous.JPG"
  },
];

const Services = () => {
  return (
    <>
      <h1 className="center">Services Page</h1>

      <div className="container">
        <div className="row">
        {arrayobj.map((element) => {
          let { id, header, content, items, link ,temp} = element;
          return (
            <>
                <div className="col mx-5">
                  <Categorycard
                    key={id}
                    roll={id}
                    header={header}
                    content={content}
                    items={items}
                    link={link}
                    temp={temp}
                  />
                </div>
            </>
          );
        })}

              </div>
        {/* <div class="col"><Categorycard/></div> */}
        {/* <div class="col"><Categorycard/></div> */}
        {/* <div class="row">
          <div class="col"><Categorycard/></div>
          <div class="col"><Categorycard/></div>
        </div>
        <div class="row">
          <div class="col"><Categorycard/></div>
          <div class="col"><Categorycard/></div>
        </div> */}
      </div>
      {/* <div className="card_con">

              <div className="cat_card_con"><Categorycard /></div>
              <div className="cat_card_con"><Categorycard /></div>
              <div className="cat_card_con"><Categorycard /></div>
              <div className="cat_card_con"><Categorycard /></div>
              <div className="cat_card_con"><Categorycard /></div>
              </div> */}
    </>
  );
};
export default Services;
