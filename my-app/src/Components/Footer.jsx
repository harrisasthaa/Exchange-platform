import React from "react";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <hr />
        <p className="center">Follow us on  {"  "}
        <a
          href="https://www.linkedin.com/company/exengg/"
          className="btn btn-primary px-1 py-0"
          style={{ fontWeight: "700", borderRadius: "8px" }}
        >
          in
        </a></p>
        <p className="center">To join us contact or mail at <span onClick={()=>{
            window.alert(" Mail at  ' dtuexengg@gmail.com '")
        }}><EmailIcon/></span> </p>
        <p className="center">All rights are reserved for @ExEngg </p>
      </div>
    </>
  );
};
export default Footer;
