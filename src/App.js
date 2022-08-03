import React, { useState } from 'react'
import './App.css'
import data from './data'

function App() {
  const [person, setPerson] = useState(data)

  const personItems = person.map((onePerson)=>{
    const {id,name,image,msg} = onePerson;

    return <div key={id} className="item-container"> 
      <div className='img-row'>
        <div>
          <img src={image} alt='person img' className='img'/>
        </div>
        <p>{name}</p>
        <button className='remove-btn' onClick={()=>removeItem(id)}>Remove</button>
      </div>
      <article className='article'>{msg}</article>
    </div>
  })

  const clearList = () =>{
    setPerson([])
  }

  const removeItem = (sameID) =>{
    const filteredPersons = person.filter((onePerson) =>{
      return onePerson.id !== sameID
    })
    setPerson(filteredPersons)
  }

  const cardNumLogic = () =>{
    //1
    const cardTitle = document.querySelector('.title')
    if(person.length === 1){
      cardTitle.textContent = " CARD"
    } else if(person.length === 0){
      cardTitle.textContent = " CARDS"
    }

    //2
    const defArticle = document.querySelector('.default-article')
    if(person.length === 0){
      defArticle.textContent = "Empty list..."
    }
  }
  cardNumLogic()

  return (
    <div className="App">
      <div className='section-center'>
          <h1>
            <span className='card-number'>{person.length}</span> 
            <span className='title'>CARDS</span>
          </h1>

          <button className='clear-list-btn' onClick={clearList}>
            Clear List
          </button>

          <div className='cards-bg'>
            {personItems}
          </div>
          <div className='default-article'></div>
      </div>
    </div>
  );
}

export default App;
