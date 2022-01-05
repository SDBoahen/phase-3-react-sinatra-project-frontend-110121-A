import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

import UserCard from './UserCard';




function App() {


  const [ users, setUsers ] = useState( [] )
  console.log("State Of Our  users ->", users)  //


  useEffect( 
    
    ()=>{

      fetch("http://localhost:9292/users")
      .then( r => r.json() )
      .then( 

        (fetchedUserArrayOfObjs)=>{ console.log("fetchedUserArrayOfObjs: ", fetchedUserArrayOfObjs) 

          setUsers( [ ...fetchedUserArrayOfObjs ]  )

        }
        
      )

    }
  
  , [] )


  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Hello User's From The Backend! 🙌 :)</h1>
        {

          users.map( 

            (eachUser)=>{

              return( <UserCard 
                
                key={eachUser.id} // For React  🤖
                userProp={eachUser} // For Us  :)
                
              /> )

            }

           )

        }


      </header>
    </div>
  );
}

export default App;
