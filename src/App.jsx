import React from 'react'
import { useState } from 'react'
import './styles/styles.css'
import TODOform from './TODOform'
import OnTheGrill from './OnTheGrill'
import InTheFreezer from './InTheFreezer'


function App() {
  const [todos, setTodos] = useState(SAMPLE_TODOS)
  const SAMPLE_TODOS = [
    {
    id: 111,
    task: 'finish TODO App',
    category: 'coding projects',
    priority: 'medium',
    deadline: '5 Nov',
    Progress: '0%'
    }
  ]
  return
  <div>
    <TODOdisplay/>
    <OnTheGrill/>
    <InTheFreezer/>
  </div>
}
export default App
