import React, { useState } from "react";
export default function Mode(props) {
  const [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  
  // const[count,setCount] = useState(0)
  // const ncount = ()=>{
  //   setCount(count+1)

  // }

  const changeMode = () => {
    if (style.color === "black") {
      setStyle({
        color: "white",
        backgroundColor: "black",
      });
    } else {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
    }
  };

  return (
    <div  className="container mt-5">
      
      <div className = "container" style={style}>
      <h1>About Us</h1>
      <div style={style} className="accordion mt-3" id="accordionExample">
        <div style={style} className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              style={style}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Dark and Light Mode
            </button>
          </h2>
          <div
            style={style}
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              style={style}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            style={style}
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              style={style}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="form-switch text-center my-5">
        <input
          type="checkbox"
          id="mode"
          className="form-check-input"
          onClick={changeMode}
        />
        <label htmlFor="" className="form-check-label"></label>
      </div>
      </div>

  {/* <p>{count}</p>
  <button  type="submit" className="btn btn-primary btn-block  m-auto" onClick={ncount}>
    Click
  </button> */}
  
    </div>
  );
}
