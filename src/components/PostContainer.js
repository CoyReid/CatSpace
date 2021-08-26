import PostCard from "./PostCard";
import { Feed } from "semantic-ui-react";

function PostContainer({posts, handleLike, darkMode}) {
 
  return (
    <>
      <Feed>
        
         {posts.map((post) => (
             <PostCard key={post.id} post={post} handleLike={handleLike} darkMode={darkMode}/>
         ))}
        
      </Feed>
    </>
  );
}

export default PostContainer;
