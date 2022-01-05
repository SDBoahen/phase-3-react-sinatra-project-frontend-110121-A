import logo from './logo.svg';
import './App.css';


// Hook Imports
import { useEffect, useState } from 'react';

// Component Imports
import UserCard from './UserCard';




function App() {


  //// State
    const [ users, setUsers ] = useState( [] )
    console.log("State Of Our  users ->", users)
  //// State


  //// Global Constants
    const USERS_URL = "http://localhost:9292/users"
  //// Global Constants


  const usersGetFetch=()=>{

    fetch(USERS_URL)
    .then(r => r.json())
    .then( handleUsersGetFetchResponse )

  }
  const handleUsersGetFetchResponse=(fetchedUserArrayOfObjs)=>{ 
    console.log("fetchedUserArrayOfObjs: ", fetchedUserArrayOfObjs)
      // So That We Can See The  reponse  That We Got Back
      // - Sam 
    setUsers( [ ...fetchedUserArrayOfObjs ]  )
  }


  useEffect( usersGetFetch , [] )

  
  const renderUserCardsMapCallback=(eachUser)=>{
    return(<UserCard key={eachUser.id} userProp={eachUser} />)
  }
  const mappedUsers = users.map( renderUserCardsMapCallback ) 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button>Login :)</button>
        <h1>Hello User's From The Backend! 🙌 :)</h1>
        {mappedUsers}
      </header>
    </div>
  );

}
export default App;





  // users:
  //// let numUsers = users.length

    // case: 0
      // code for case 0
      // time: 0+  ~  1s
    // case: 1
      // code for case 1
      // time: time * 2
    // case: 1 + numUsers
      // code for case (1 + n)
      // time: time * numUsers

    // case: 100 + numUsers
      // code for case (1 + n)
      // time: (time * 100users) + newTime * numUsers

  //// n = 10

  //renderUsers - function