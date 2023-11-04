import React,{useState} from 'react'

function Text() {
const[text,setText]=useState(
  JSON.parse(window.localStorage.getItem('text'))
);


const handeltext=(e)=>{
  setText(e.target.value)
  window.localStorage.setItem('text',JSON.stringify(text))
}
  return (
    <div style={{height:'56vh',width:'38%',float:'right',position:'relative', top:'30px',right:'30px', color:'black', borderRadius:'5px',background:'#F1C75B'}}>
        <h1 style={{padding:"10px", marginLeft:"15px",marginTop:'20px'}}>All notes</h1>
        <textarea placeholder="This is how I am going to learn
         MERN Stack in next 3 months."style={{height:'38vh',width:'70%',background:'#F1C75B', border:'none',marginLeft:'20px', padding:'20px',outline:'none',fontSize:'15px',letterSpacing:'1px'}}
         value={text}
         onChange={handeltext} />
    </div>
  )
}
export default Text