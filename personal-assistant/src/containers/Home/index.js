import React, { useState, useEffect } from 'react'
import { WrapperDiv, Header, DisplayTaskDiv, TaskDiv, AddTaskDiv } from './styles'

var tasks = ["name"]

const Home = () => {

  // const [date, setDate] = useState(new Date())
  // useEffect(() => {
  //   const timer = setInterval (() => setDate(new Date(), 1000))
  //   return function cleanup(){
  //       clearInterval(timer)
  //   }
  // })

  // const { weather, setWeather} = useState('')

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=boston&appid=886705b4c1182eb1c69f28eb8c520e20')
  //     const data = await res.json
  //     setWeather(data.weather[0].desription)
  //   }
  //   fetchData()
  // })

  const {todo, setTask} = useState('');
  const [stuff, setStuff] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    tasks.push(stuff);
    alert(`Your tasks: ${tasks}`)
    // <strike>{stuff}</strike>
  }



  const completeTask = (props) => {
    // return <strike>{task}</strike>
    return <h1>hello</h1>
  }

  return (
    <WrapperDiv>
      <Header>
        <h1>Welcome to your personal assistant!!</h1>
        {/* <h2>Today's date is {date.toLocaleDateString()}</h2>
        <h2>It is currently {date.toLocaleTimeString()}</h2>
        <h2>The weather today is {weather}</h2> */}
      </Header>
      <DisplayTaskDiv>
        {tasks? <TaskDiv> <p>{tasks}</p>
        <button onClick = {completeTask(tasks)} >Complete</button>
        <button onClick = {completeTask(tasks)} >Clear</button> </TaskDiv> : 
          <h3>No tasks!! Hooray!!</h3>}
      </DisplayTaskDiv>
      <AddTaskDiv>
        <form onSubmit={handleSubmit}>
          <label>Add task:
            <input 
              type="text" 
              value={stuff}
              onChange={(e) => setStuff(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form>
      </AddTaskDiv>
    </WrapperDiv>
  )
}

export default Home