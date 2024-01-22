import React,{useRef,forwardRef,useState, useImperativeHandle} from "react";


const InnerText=forwardRef((props,ref)=>{
    
    const [text,setText]=useState("")
    const onaValidate=()=>{
        if(text=="armut"){
            alert('yanlis giris')
        }
    }
   
    useImperativeHandle(ref,()=>({onaValidate}))
    return(
        <div>
       <input ref={ref} value={text} onChange={e=>{setText(e.target.value)}}></input>
       
       </div>
    )
})


export default InnerText;