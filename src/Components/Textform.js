import { useRef, useState } from "react";
import JoditEditor from 'jodit-react';

const Textform = (props) => {
    
    const[text,setText]=useState("");
    const[content,setContent]=useState("");
    const[fontSize,setFontSize]=useState(20);
    const[fontWeight,setFontWeight]=useState(400);
    const[textDecoration,setTextDecoration]=useState("none");
    const[fontFamily,setFontFamily]=useState("default");

    const handleUpCase=()=>{
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleLowerCase=()=>{
        let newText= text.toLowerCase();
        setText(newText)
    }

    const handleOnchange=(event)=>{
        setText(event.target.value)
    }
    const handleFontFamily=(event)=>{
        setFontFamily(event.target.value)
    }

    const handleCopy=()=>{
       let text= document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" ").trim());
    }

    return (
        <>
            <div className="container py-4">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea id="myBox" className="form-control" style={{fontSize:fontSize,fontWeight:fontWeight,textDecoration:textDecoration,fontFamily:fontFamily}} value={text}  onChange={handleOnchange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpCase}>Convert to uppercase</button>
                <button className="btn btn-primary  mx-1" onClick={handleLowerCase} >Convert to Lowercase</button>
                <button className="btn btn-primary  mx-1" onClick={()=>setFontSize(fontSize+2)} >Increase fontsize</button>
                <button className="btn btn-primary  mx-1" onClick={()=>setFontSize(fontSize-2)} >Decrease fontsize</button>
                <button className="btn btn-primary  mx-1" onClick={()=>setFontWeight(fontWeight+100)} >Increase fontWeight</button>
                <button className="btn btn-primary  mx-1" onClick={()=>setFontWeight(fontWeight-100)} >Decrease fontWeight</button>
                <button className="btn btn-primary  mx-1 my-2" onClick={()=>setTextDecoration("line-through")} >text decoration Line through</button>
                <button className="btn btn-primary  mx-1 my-2" onClick={()=>setTextDecoration("none")} >text decoration none</button>
                <button className="btn btn-primary  mx-1 my-2" onClick={handleCopy} >Copy Text</button>
                <button className="btn btn-primary  mx-1 my-2" onClick={handleExtraSpaces} >handle Extra Spaces</button>
                <select>
                    <option  >Select fontFamily</option>
                    <option value="Georgia" onChange={handleFontFamily}>Georgia</option>
                    <option  value="Arial" onChange={handleFontFamily}>Arial</option>
                    <option  value="Cursive" onChange={handleFontFamily}>Cursive</option>
                </select>
            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{text}</p>
            </div>
            <div className="container">
            <JoditEditor
			value={content}
			onChange={newContent =>setContent(newContent)}
		/>
            </div>
        </>
    );
}

export default Textform;