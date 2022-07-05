import React from "react";
import "./Display.css";
import img from "/Users/decagon/Desktop/access-bank-clone/src/Images/tnt-today-not-tomorrow-mckay-christensen-8S46VEx3g5n.1400x1400.jpg";
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
