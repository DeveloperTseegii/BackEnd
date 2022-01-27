import { useEffect, useState } from "react";
import '../App.css'

function Content() {
    const [content , setContent] = useState([]);
    const [major , setMajor] = useState([]);
    const [age , setAge] = useState([]);
    const [discription , setDiscription] = useState([]);
    const [address , setAddress] = useState([]);
    const [email , setEmail] = useState([]);
  
   useEffect(()=>{
       fetch('http://localhost:3001/name')
       .then((res)=>{
          return res.json()
   
       }).then((data)=> setContent(data.name))
       .catch((err)=>{
           return err
       })
      fetch('http://localhost:3001/age')
       .then((res)=>{
          return res.json()
   
       }).then((data)=> {
         console.log(data.age)
          setAge(data.age)
        })
       .catch((err)=>{
           return err
       })
      fetch('http://localhost:3001/major')
       .then((res)=>{
          return res.json()
   
       }).then((data)=> {
          setMajor(data.major)
        })
       .catch((err)=>{
           return err
       })
      fetch('http://localhost:3001/discription')
       .then((res)=>{
          return res.json()
   
       }).then((data)=> {
          setDiscription(data.discription)
          console.log(data.discription)
        })
       .catch((err)=>{
           return err
       })
      fetch('http://localhost:3001/based')
       .then((res)=>{
          return res.json()
   
       }).then((data)=> {
          setAddress(data.city)
        })
       .catch((err)=>{
           return err
       })
      fetch('http://localhost:3001/email')
       .then((res)=>{
          return res.json()
   
       }).then((data)=> {
          setEmail(data.email)
        })
       .catch((err)=>{
           return err
       })
       
    }, []);
  return (
    <div className="App container">
       <div className="me">
       <img src="http://localhost:3001/me.jpeg" alt="" />
       </div>
       <h1>Hi, I am {content}, {age} <br/> {major} <br/> based in {address}</h1>
       <p>{discription}</p>
       <p>Би  <a href="#">теннис</a>, <a href="#">шатар</a>  тоглож <a href="https://www.worldcubeassociation.org/persons/2017NYAM01">рубик шоо </a>эвлүүлдэг.</p>
       <p>For collabration or quiestion;</p>
       <p className="email">{email}</p>
       <img src="./images/facebook-brands.svg" alt="" className="icons" />
       <img src="./images/instagram-brands.svg" alt="" className="icons" />
       <img src="./images/twitter-brands.svg" alt="" className="icons" />

    </div>
  );  
}
export default Content;