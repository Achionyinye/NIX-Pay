import React from "react";
import "./Display.css";
import img from "../../Images/tnt.jpg";
function Display() {
  return (
    <>
      <div className="display">
        <img src={img} alt="img" width={400} height={300} />
        <div>
          <textarea id="text1" name="text1" width={100}>
            Register on the Early Savers Microsite
          </textarea>
          <br />
          <br />
          <textarea id="text2" name="text2">
            Register on Accelerate Microsite
          </textarea>
        </div>
      </div>
    </>
  );
}

export default Display;
