import PostCard from "./PostCard";

function PostContainer() {
  return (
    <>
      <div className="ui main container">
        <div className="ui grid">
          <div className="ten wide column">
            <h2 className="ui header">Posts</h2>
            <PostCard />
            <p> i am a fake post</p>
            <p> i am a fake post</p>
            <p> i am a fake post</p>
            <p> i am a fake post</p>
            <p> i am a fake post</p>
            <p> i am a fake post</p>
      
          </div>
        </div>
      </div>
    </>
  );
}

export default PostContainer;
