import PostCard from "./PostCard";
import { Segment, Grid, Column, Card, Feed } from "semantic-ui-react";
function PostContainer() {
  return (
    <>
      <Grid.Column stretched width={12}>
        <div className="ui segment">
          <div className="ui feed">
            <PostCard />
            <p> i am a fake post</p>
            <p> i am a fake post</p>
            <p> i am a fake post</p>
            <p> i am a fake post</p>
            <p> i am a fake post</p>
            <p> i am a fake post</p>
            <p> i am a fake post</p>
            <p> i am a fake post</p>
            <p> i am a fake post</p>
            <p> i am a fake post</p>
            <p> i am a fake post</p>
            <p> i am a fake post</p>
            <p> i am a fake post</p>
            <p> i am a fake post</p>
          </div>
        </div>
      </Grid.Column>
    </>
  );
}

export default PostContainer;
