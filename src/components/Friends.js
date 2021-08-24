import PostContainer from "./PostContainer"
import { Segment, Grid, Column } from 'semantic-ui-react'

function Friends() {
    return (
        <div className="ten wide column">
         <Segment>
            <h2 header> this is friends </h2>
            <PostContainer />
            </Segment>
</div>
    )
}

export default Friends