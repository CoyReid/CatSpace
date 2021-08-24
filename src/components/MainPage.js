import PostContainer from "./PostContainer";
import PostForm from "./PostForm";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { Segment, Grid, Column } from "semantic-ui-react";

import SearchSortFilter from "./SearchSortFilter";

function MainPage({usersData}) {

   
    const newGrumpy = usersData[0].posts.slice(0, 3)
    const newGarf = usersData[1].posts.slice(0, 3);
    const newTom = usersData[2].posts.slice(0, 3);
    const newBoots = usersData[3].posts.slice(0, 3);
    const mainPagePosts = [...newGrumpy, ...newGarf, ...newTom, ...newBoots].sort((a, b) => {
        let c = new Date(a.created);
        let d = new Date(b.created);
        return d-c;
    });
    
  
    return (
    <>
      <div className="ten wide column">
        <Segment>
          <h2>this is mainpage</h2>

          <SearchSortFilter />
          <PostForm />
          <PostContainer mainPagePosts={mainPagePosts}/>
        </Segment>
      </div>
    </>
  );
}

export default MainPage;
