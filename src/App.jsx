import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {

  const actors = ['Shakib', 'Shoriful Raj', 'Josim', 'Rubel', 'Salman Shah'];

  const books = [
    {id: 1, name: 'physics', price: 100},
    {id: 2, name: 'Math', price: 120},
    {id: 3, name: 'Chemistry', price: 130},
    {id: 4, name: 'physics', price: 150},
  ]

  const singers = [
    {id: 1, name: 'Dr. Mahfuzur', age: 68},
    {id: 2, name: 'Eva Rahman', age: 38},
    {id: 3, name: 'Shuvro Dev', age: 58},
    {id: 4, name: 'Pritom', age: 28},
  ]

  return (
    <>
      <h1>Vite + React</h1>

      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {/* <Todo 
        task="Learn React" 
        isDone={true}></Todo>
      <Todo 
        task="Core Concepts" 
        isDone={false}></Todo>
      <Todo 
        task="Try JSX" 
        isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="17"></Device>
      <Device name="watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="85"></Student>
      <Student></Student>
      <Developer></Developer>
      <Developers></Developers> */}
    </>
  )
}

function Device(props) {
  // console.log(props);
  return <h2>This Device: {props.name} price: {props.price}</h2>
}

function Person(){
  const age = 25;
  const money = 20;
  const person = {name: 'shakib', age: 12};
  return <h3>I am {person.name} with age: {age + money}</h3>
}

const {grade, score} = {grade: '7', score: '99'}

function Student({grade=1, score=0}){
  console.log(grade, score);
  return (
  <div className='student'>
    <h3>This is a student</h3>
    <p>Class: {grade}</p>
    <p>Score: {score}</p>
  </div>
  )
}

function Developer(){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px',
  }
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding: </p>
    </div>
  )
}

function Developers(){ 
  return (
    <div style={{
      margin: '20px',
      padding: '20px',
      border: '2px solid red',
      borderRadius: '10px',
    }}>
      <h5>Devo devo</h5>
      <p>Coding: </p>
    </div>
  )
}

export default App
