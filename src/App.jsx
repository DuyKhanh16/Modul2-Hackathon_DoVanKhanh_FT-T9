import React, { useState } from 'react'
import './App.css'
export default function App() {
  const [text, setText] = useState("")

  const chargerValue = (e) => {
    setText(e.target.value)
  }
  const arrText = text.split("")
  const Word = arrText.filter((item) => {
    return item != " " && item != "\n"
  })

  let latter = 0
  if (text.length != 0) {
    let arr = text.trim().split(/\s+/)
    latter = arr.length
    //  console.log(arr);
    //  console.log(arr.length);
  }
  let arrPara = text.split("").filter((item) => item == "\n")
  const up = () => {
    for (let i = 0; i < arrText.length; i++) {
      if (arrText[i] != "\n") {
        arrText[i] = arrText[i].toUpperCase()

      }
    }
    setText(arrText.join(""))
  }
  const low = () => {
    for (let i = 0; i < arrText.length; i++) {
      if (arrText[i] != "\n") {
        arrText[i] = arrText[i].toLowerCase()

      }
    }
    setText(arrText.join(""))
  }

  return (
    <div className='container'>
      <h1>Word Counter</h1>
      <div className='container__box'>
        <div className='box'>
        Word
        <p>{Word.length}</p>
        </div>
        <div className='box'>
        Latter
        <p>{latter}</p>
        </div>
        <div className='box'>
        Paragraph
        <p>{arrPara.length}</p>
        </div>
      </div>
      <div className='container__input'>
        <textarea className='area' onChange={chargerValue} name="" id="" cols="30" rows="10" value={text} placeholder='Text Area' ></textarea>
        <br />
        <button onClick={up} className='button'
        >Click to Uppercase</button>
        <button onClick={low} className='button'
        >Click to Lowercase</button>
      </div>
    </div>
  )
}
