import React, {useState, useEffect} from 'react'
import "./Work.css"
import {MdCancel} from "react-icons/md"
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im"
import image1 from "./Image/images7.jfif"
import image2 from "./Image/image1.jfif"
import image3 from "./Image/image2.jfif"
import image4 from "./Image/image3.jfif"

import moment from "moment"
import SkeletonImage from 'antd/lib/skeleton/Image'


const WorkHome = () => {
    const [img, setImg]=useState(image2)
    const [name, setName]=useState("")
    const [quote, setQuote]=useState("")
    const [data, setData]=useState([{
        id: 1,
        name:"azeez",
        quote:"its good to be good",
        time:Date.now(),
        avatar:image1},
        
        {id: 2,
        name:"Habeeb",
        quote:"do your best and leave the rest",
        time:Date.now(),
        avatar:image2},

        {id: 3,
        name:"Taoheed",
        quote:"make hay while the sun shine",
        time:Date.now(),
        avatar:image3},
        

        {id: 4,
        name:"Ganiyu",
        quote:"its a beautiful day",
        time:Date.now(),
        avatar:image4}
   ])

   const uploadImage=(e)=>{
       const file= e.target.files[0]
       const saveFile = URL.createObjectURL(file)
       setImg(saveFile)
   }

   const pushData =()=>{
       const file={
           name:name,
           quote:quote,
           avatar:img,
           time:Date.now(),
           id:data.lenght+1
        }
        setData([...data, file])
        setName("")
        setQuote("")
        setImg("")

   }

   const deleteItems=(id)=>{
       const removeFiles=data.filter((el)=>
           el.id!==id)
       
       setData(removeFiles)
   }

   useEffect(()=>{
       const storedValue=JSON.parse(localStorage.getItem("storageData"))
    setData(storedValue)
   },[])

   useEffect(()=>{
    localStorage.setItem("storageData", JSON.stringify(data))
   },[data])

  

    return ( 
        <div className="container">

            <div className="container_new">
                <img className="container_newImage" src={img}/>
                <div className="container_newInput">
                    <input className="container_newInputFile" type="file" onChange={uploadImage}/>
                    <input placeholder="Enter your Name" value={name}
                     onChange={(e)=>{
                         setName(e.target.value)
                     }} className="container_newInputFile"/>
                    <input placeholder="Wats on your mind" value={quote}
                     onChange={(e)=>{
                         setQuote(e.target.value)}}
                          className="container_newInputFile"/>
                    <div className="container_buttonDiv">
                    <button className="container_button" onClick={pushData}>Submit</button>
                    </div>
                </div>
            </div>


           <div className="container_wrapper">
                {
                    data.map((props)=>(
                        <div className="container_card">
                           <div className="container_cardrow">
                                <div className="container_cancel  ">
                                   <MdCancel onClick={()=>{
                                       console.log("am in")
                                       console.log(props.id)
                                       deleteItems(props.id)
                                   }}/>
                                </div>
                                 <img className="container_avatar" src={props.avatar} alt="img"/>
                        </div>
                            <div className="container_quotes">  
                               <div><ImQuotesLeft/>{props.quote}<ImQuotesRight/></div>
                               </div>
                               <div className="container_name">{props.name}</div>
                               <div className="container_time">{moment(props.time).fromNow()}</div>
                          </div>
                    ))
                }
           </div>
        </div>
    )
}

export default WorkHome
