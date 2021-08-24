import "./App.css";
//import {  useState, useEffect } from "react";
import './App.css';
import {  useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import MainPage from "./components/MainPage";
import Settings from "./components/Settings";
import Friends from "./components/Friends";
import { users } from "./data/db.json"
import { Segment, Grid, Column } from 'semantic-ui-react'

function App() {
  
  const [usersData, setUsersData] = useState(users);



  return (
    <>
    <div className="ui main container">
<Grid>
        <NavBar />
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/friends">
            <Friends />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route exact path="/">
            <MainPage usersData={usersData}/>
          </Route>
        </Switch>
 
      </Grid>
      </div>
     </>
  );
}

export default App;

//This is all for fetching from API's to make random set of 10 posts

// const [posts, setPosts] = useState([]);
//   const [friendsObj, setFriendsObj] = useState({
//     name: "",
//     posts: []
//   });

//   useEffect(() => {
//     if (posts.length < 11) {
//       fetch("https://api.thecatapi.com/v1/images/search")
//       .then(r => r.json())
//       .then(catpic => {
//         fetch("https://catfact.ninja/fact")
//         .then(r => r.json())
//         .then(catfact => {
//           setPosts([...posts, {pic: catpic[0].url, fact: catfact.fact}])
//         })
//       })
//     }
//     setFriendsObj({name: "cat1", posts: posts})
//     console.log(friendsObj)
//   }, [posts])

//   useEffect(() => {
//     if (friendsObj.posts.length === 10) {
//       fetch("http://localhost:8000/user/", {
//         method: "POST",
//         headers: {"Content-Type" : "application/json"},
//         body: JSON.stringify(friendsObj)
//       })
//     }
//   }, [posts])
