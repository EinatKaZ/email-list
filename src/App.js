import './App.css';
import JsonDataDisplay from './ExJson';
import {useState} from 'react';


function App() {
  const [emails, setEmails] = useState('')
  const [names, setNames] = useState('')
  const [emailList, setEmailList] = useState(JsonDataDisplay)
  const [nameList, setNameList] = useState(JsonDataDisplay)


  function handleToDoChange(e){
    setEmails(e.target.value)
  }

  function handleToDoChange1(e1){
    setNames(e1.target.value)
  }

  function addEmail(){
    setEmailList([...emailList,emails])
    setNameList([...emailList,names])
  }
  
  return (
    <div className="App">

      <p>
      <label> Name </label>
      <input value = {names} onChange = {handleToDoChange}/>
      <label> Email </label>
      <input value = {emails} onChange = {handleToDoChange}/>
      <button onClick={addEmail}> Add </button>
      </p>

      <JsonDataDisplay/>

    </div>
  )
}

export default App;
