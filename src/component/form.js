          import React, { useState } from "react";
          
          export default function Form(props) {
            const ToUpperCase = () => {
              console.log("convert into ToUpperCase" + text); //react hooks
              let newText = text.toUpperCase();
              setText(newText);
              props.showAlert("Text converted to uppercase","success")
              
            };

            const ToLowerCase = () => {
              let newText1 = text.toLowerCase();
              setText(newText1);
            props.showAlert("Text converted to lowercase","success")
            };

            const Clear = () => {
              // let newText1 = text.slice(text.length);
              let newText1 = "";
              setText(newText1);
              props.showAlert("Text cleared","success")
            };

            const onchange = (event) => {
              console.log("onchange");
              setText(event.target.value);
            };

            const space = () => {
              let newText1 = text.split(/[ ]+/);
              setText(newText1.join(" "));
              props.showAlert("Extra-space cleared","success")
            };
            const boldText = () =>{
              // document.designMode = "on";
              let textarea = document.getElementById("form4Example3");
             
            // textarea.style.fontWeight = "bold";
            textarea.style.fontWeight =  (textarea.style.fontWeight==="normal")? 'bold' : 'normal'
            props.showAlert("Text bold","success")
            
            // var highlight = document.getSelection();

            // document.getSelection().style.fontWeight = "bold";
            
            
            //  var span  = hello ${highlight} ;
            //  var span = `<span style="font-weight:bold;">${highlight}</span>`;
            // console.log(span)
          // highlight.style.fontWeight = "bold";
          // textarea.innerHTML = textarea.innerHTML.replace(window.getSelection(), "hello");
          

          //  setText(text.replace(highlight, span));

            
            

            }

            const copyText = () => {
             
       
               let textarea = document.getElementById("form4Example3");
               textarea.select();
               navigator.clipboard.writeText(textarea.value);
               props.showAlert("Text copied","success")

            }


           const firstUppercase = ()=>{
            let newText1 = text.split(" ");


            // console.log(newText1)

            let newText2 = newText1.map((word)  => {
              return word.charAt(0).toUpperCase()+word.slice(1);
            
            })
            setText(newText2.join(" "));
            props.showAlert("First letter capitalize","success")


           }
            const italic =()=>{
              let textarea = document.getElementById("form4Example3");
              
              // fontWeight: isBold ? 'bold' : 'normal'
               
                textarea.style.fontStyle =  (textarea.style.fontStyle==="normal")? 'italic' : 'normal'
                props.showAlert("Text Italic","success")


            }
            const underline =()=>{
              let textarea = document.getElementById("form4Example3");
              // textarea.style.textDecoration = "underline"
              textarea.style.textDecoration =  (textarea.style.textDecoration==="none")? 'underline' : 'none'
              props.showAlert("Text underlined","success")

            }

            // font-size
            const fontSize =()=>{
              const font = document.getElementById("font");
              let textarea = document.getElementById("form4Example3");
             
                textarea.style.fontSize = 40 +"px";

             


            }
            // use state
            const [text, setText] = useState("Enter your text here");
            // const [tcolor, setTcolor] = useState("black");
            // const [black, setTBlack] = useState("black");

            return (
              <div>
               {/* <div style={{backgroundColor: props.ctheme}}> */}
              <div style={{ color: props.ctheme ==='light'? "black":'white' }} className="container mt-5">
                {/* <!-- Message input --> */}
                <div className="form-outline mb-5 ">
                  <h2>{props.heading}</h2>

                  {/* font size */}
                  <select class="form-select w-25 offset-9" aria-label="Default select example">
  <option selected>Font-Size</option>
  <option value="1" id="font" onClick={fontSize}>15</option>
  <option value="2">20</option>
  <option value="3">30</option>
</select>

                  <textarea
                    style={{ color: props.ctheme==='light'? "black":"white"  ,backgroundColor: props.ctheme==='light'? "white":"grey" }}
                    className=" form-control mx-my-5 mt-3"
                    id="form4Example3"
                    rows="4"
                    value={text}
                    onChange={onchange}
                  ></textarea>
                </div>

                {/* <!-- Submit button --> */}
                <div className="row">
                  <button
                    // style={{ backgroundColor: "black", color: "white" }}
                    type="submit"
                    className="btn btn-primary   btn-block  col-sm-2 mx-2"
                    onClick={ToUpperCase}
                  >
                    Convert To UpperCase
                  </button>
                  <button
                    // style={{ backgroundColor: "blue", color: "white" }}
                    type="submit"
                    className="btn btn-primary  btn-block col-sm-2 mx-2 "
                    onClick={ToLowerCase}
                  >
                    Convert To Lowercase
                  </button>
                  <button
                    // style={{ backgroundColor: "black", color: "white" }}
                    type="submit"
                    className="btn btn-primary  btn-block col-sm-2 mx-2 "
                    onClick={Clear}
                  >
                    Clear Text
                  </button>

                  <button
                    // style={{ backgroundColor: "black", color: "white" }}
                    type="submit"
                    className="btn btn-primary  btn-block col-sm-2 mx-2 "
                    onClick={space}
                  >
                    Clear space
                  </button>

                  <button
                    // style={{ backgroundColor: "black", color: "white" }}
                    type="submit"
                    className="btn btn-primary  btn-block col-sm-2"
                    onClick={copyText}
                  >
                    copyText
                  </button>
                  <button
                    // style={{ backgroundColor: "black", color: "white" }}
                    type="submit"
                    className="btn btn-primary  btn-block col-sm-2 mx-2 mt-4"
                    onClick={boldText}
                  >
                    Bold
                  </button>
                  <button
                    // style={{ backgroundColor: "black", color: "white" }}
                    type="submit"
                    className="btn btn-primary  btn-block col-sm-2 mx-2 mt-4"
                    onClick={firstUppercase}
                  >
                   uppercase
                  </button>
                  <button
                    // style={{ backgroundColor: "black", color: "white" }}
                    type="submit"
                    className="btn btn-primary  btn-block col-sm-2 mx-2 mt-4"
                    onClick={italic}
                  >
                   Italic
                  </button>
                  <button
                    // style={{ backgroundColor: "black", color: "white" }}
                    type="submit"
                    className="btn btn-primary  btn-block col-sm-2 mx-2 mt-4"
                    onClick={underline}
                  >
                   Underline
                  </button>

                </div>

                <h1 className=" mt-3">Word Counter</h1>

                <p className="">
                  {text===""? 0:text.split(" ").length} words & {text.length} character
                </p>

                <h1 className=""> Text Preview</h1>
                <p className="">{text}</p>
                <h1 className="">Reading Time</h1>
                <p className="">{0.008 * text.length} min read</p>

                {/* <h1 className="">Change color</h1>
                <div className="form-group ">
                  <label for="usr">Enter color name:</label>
                  <input
                    type="text"
                    className="form-control mt-3 w-25"
                    value={black}
                    onChange={(event) => {
                      setTcolor(event.target.value);
                      setTBlack(event.target.value);
                    }}
                    id="usr"
                  />
                </div> */}
              </div>
              </div>
            );
          }

          // to set default valuenfor props
          Form.defaultProps = {
            heading: "enter your email",
          };
