import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import PostContainer from "./PostContainer";
import ProfileCover from "./ProfileCover";

function Page({ handleLike }) {
  
  const [friendData, setFriendData] = useState({posts: []});

  const id = useParams().id;

  useEffect(() => {
    fetch(`http://localhost:8000/users/${id}`)
    .then(r => r.json())
    .then(data => setFriendData(data))
  },[id, handleLike])

  return (
    <>
    <ProfileCover />
    <Segment>
      <PostContainer posts={friendData.posts} handleLike={handleLike}/>
    </Segment>
    </>
  )
}

export default Page;