import PostCard from "./PostCard";
import { Segment, Grid, Column, Card, Feed } from "semantic-ui-react";
function PostContainer({posts}) {
  return (
    <>
      <Feed>
        
         {posts.map((post) => (
             <PostCard key={post.fact} post={post}/>
         ))}
        
      </Feed>
    </>
  );
}

export default PostContainer;
