import PostCard from "./PostCard";
import { Feed } from "semantic-ui-react";

function PostContainer({posts, handleLike}) {
 
  return (
    <>
      <Feed>
        
         {posts.map((post) => (
             <PostCard key={post.id} post={post} handleLike={handleLike}/>
         ))}
        
      </Feed>
    </>
  );
}

export default PostContainer;
