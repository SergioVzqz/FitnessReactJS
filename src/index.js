
// const element = document.createElement('h1');
// element.innerText = 'Hola react..';
// const container = document.getElementById('root');
// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  nombre: 'Sergio',
  apellido: 'Vazquez',
  avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'
}

function getName(user){
  return `${user.nombre} ${user.apellido}`
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {getName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const element = (
      <div>
        <h1>{getGreeting(user)}</h1>
        <img src={user.avatar} alt="avatar"/>
      </div>)
const container = document.getElementById('root')


//Recibe dos parametros: Que elemento va a renderear y donde
ReactDOM.render(element, container)