import Navbar from './components/Navbar';
import './App.css';
import Jumbotron from './components/Jumotron';
import { useState, createContext, useContext } from "react";

export const UserContext = createContext();

function App() {
  const [user,setUser] = useState('khalid Mansoor Portfolio');
  // const [details,setDetails] = ('');
  // const getDetails=(details)=>{
  //   setDetails(details);
  // }
  
  return (
    <>
    <UserContext.Provider value={user}>
    <Navbar/>
    <Jumbotron />
    </UserContext.Provider>
    </>
  );
}

 export default App;
