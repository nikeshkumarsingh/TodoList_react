import {useState}from"react"
import"./Todosinput.css"
export const Todosinput=({ getdata })=>{
    const [text,setText]=useState("");
    return (
        <div>
        <input onChange={(e)=>{
            setText(e.target.value)
            //console.log(e.target.value)
        }} type="text" placeholder="Enter title"/>
        <button onClick={()=>{
            getdata(text);
        }} id="btn1">Add</button>
        </div>
    )
}