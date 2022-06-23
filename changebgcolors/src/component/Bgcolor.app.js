import React from "react";
function Bgcolors() {
  return (
    <div className="Container">
      <div className="Child">
        <label>Enter a color to change the box background color:</label>
      </div>
      <div>
        <input
          type="text"
          id="color"
          className="Input"
          placeholder="write color"
          onChange={() => {
            document.getElementById("box").style.background =
              document.getElementById("color").value;
          }}
        />
      </div>
      <div id="box" className="box"></div>
    </div>
  );
}
export default Bgcolors;
