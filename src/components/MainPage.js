import PostContainer from "./PostContainer"
import PostForm from "./PostForm"
import NavBar from "./NavBar"
import { Segment, Grid, Column } from 'semantic-ui-react'


import SearchSortFilter from "./SearchSortFilter"

function MainPage() {
    return (
      <>   
   <div className="ten wide column">
    
   

            <h2 header>this is mainpage</h2>

            <SearchSortFilter />
            <PostForm />
            <PostContainer />
</div>
    </>
    )
}

export default MainPage