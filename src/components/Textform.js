import React, {useState} from 'react'
import propTypes from 'prop-types'

export default function Textform(props) {
    // let prev,curr;
    const [text,settext]=useState("");
    const [prev,setprev]=useState("");
    const [curr,setcurr]=useState("");
    const [copiedmsg,setcopiedmsg]=useState("copy");
    const [copy_class,set_class]=useState("btn btn-primary mx-1");

    

    const x=function reset(){
        let newtext=text.toUpperCase();
        console.log(newtext)
        settext(newtext);
    }
    const y=function modify(event){
        // prev=curr;
        setprev(curr);
        setcurr(event.target.value);
        settext(event.target.value);
        set_class("btn btn-primary mx-1");
        setcopiedmsg("copy")
        
    }
    const z=function lower(event){
        setprev(curr);
        let newtext=text.toLowerCase();
        setcurr(newtext);
        // console.log(newtext)
        settext(newtext);
    }
    const cl=function clear(event){
        setprev(curr);
        setcurr('');
        settext('');
    }
    const un=function undo(event){
        settext(prev);
        setprev(curr);
        setcurr(text);
    }
    const copy=(event)=>{
        navigator.clipboard.writeText(text);
        set_class("btn btn-secondary mx-1");
        setcopiedmsg("copied!")
        
    }
    
  return (
        <> 
            <div className="container" style={props.st}>
                <div className="my-5" style={props.st}>
                    <h3>{props.textboxname}</h3>
                    <textarea name="textarea"  value={text} onChange={y} cols="100" rows="10" style={props.st} ></textarea>
                </div>
                <button type="button" onClick={x} className="btn btn-primary mx-1">converttoUppercase</button>
                <button type="button" onClick={z} className="btn btn-primary mx-1">converttolowercase</button>
                <button type="button" onClick={cl} className="btn btn-primary mx-1">clear</button>
                <button type="button" onClick={un} className="btn btn-primary mx-1">undo</button>
                <button type="button" onClick={copy} className={copy_class}>{copiedmsg}</button>
                <div className="container my-5" style={props.st}>
                    <h2>Para Summary</h2>
                    <p>{text.split(' ').length} words and {text.length} characters</p>
                </div>
            </div>
        </>
        
        
    
  )
}
