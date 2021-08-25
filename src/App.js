import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import MainPage from "./components/MainPage";
import Settings from "./components/Settings";
import Friends from "./components/Friends";
import { Grid } from "semantic-ui-react";
import DarkModeWrapper from "./components/DarkModeWrapper.js";

function App() {
  const [usersData, setUsersData] = useState([{posts: ""}, {posts: ""}, {posts: ""}, {posts: ""}]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((r) => r.json())
      .then((data) => {
        setUsersData(data);
      });
  }, []);

  function handleLike(id, updatedPost){
    const userObj = usersData.find((obj) => {
      return obj.posts.find((post) => post.id === id)
    })
    const updatedUserPosts = userObj.posts.map((post) => post.id === id ? updatedPost : post)
    const newUserObj = {
      ...userObj,
      posts: updatedUserPosts
    }
    fetch(`http://localhost:8000/users/${newUserObj.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newUserObj)
    })
    const newUsersData = usersData.map((obj) => obj.id === newUserObj.id ? newUserObj : obj)
    setUsersData(newUsersData)
  }

  function addPost(newUserObj){
    const newUsersData = usersData.map((obj) => obj.id === newUserObj.id ? newUserObj : obj)
    setUsersData(newUsersData)
  }

  return (
    <>
      <div className="ui main container">
      <DarkModeWrapper darkMode={darkMode}>
        <Grid>
  
          <NavBar darkMode = {darkMode} setDarkMode = {setDarkMode} />
          <Switch>
            <Route path="/profile">
              <Profile usersData={usersData} handleLike={handleLike}/>
            </Route>
            <Route path="/friends">
              <Friends usersData={usersData} handleLike={handleLike}/>
            </Route>
            <Route path="/settings">
              <Settings darkMode = {darkMode} setDarkMode = {setDarkMode}/>
            </Route>
            <Route exact path="/">
              <MainPage usersData={usersData} handleLike={handleLike} addPost={addPost}/>
            </Route>
          </Switch>
         
        </Grid>
        </DarkModeWrapper>
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
