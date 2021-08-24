import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import PostContainer from "./PostContainer";
import ProfileCover from "./ProfileCover";

function Page() {
  
  const [userData, setUserData] = useState({posts: []});

  const id = useParams().id;

  useEffect(() => {
    fetch(`http://localhost:8000/users/${id}`)
    .then(r => r.json())
    .then(data => setUserData(data))
  },[id])

  return (
    <>
    <ProfileCover />
    <Segment>
      <PostContainer posts={userData.posts}/>
    </Segment>
    </>
  )
}

export default Page;