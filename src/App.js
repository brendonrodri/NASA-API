import React, {useState, useEffect} from "react"
import axios from "axios"
import styled from "styled-components"
export default function App(){
  const [data, setData] = useState()
  const [img, setImg] = useState()
  const GetApi = ()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=9pSEhfjhbcDvkdz06E59M8YusPcvoKjechDzEOLh&date=${data}`).then((response)=>{
      console.log(response.data.hdurl)
      setImg(response.data.hdurl)
    })
  }
  return(
    <>
      <label>Digite uma data no formato 0000-00-00</label>
      <input value={data} onChange={e=>{setData(e.target.value)}} />
      <button onClick={()=>{GetApi()}}>Buscar imagem</button>
      <img src={img} />
    </>
  )
}