import PostContainer from "./PostContainer";
import PostForm from "./PostForm";
import NavBar from "./NavBar";
import { Segment, Grid, Column } from "semantic-ui-react";

import SearchSortFilter from "./SearchSortFilter";

function MainPage() {
  return (
    <>
      <div className="ten wide column">
        <Segment>
          <h2>this is mainpage</h2>

          <SearchSortFilter />
          <PostForm />
          <PostContainer />
        </Segment>
      </div>
    </>
  );
}

export default MainPage;
