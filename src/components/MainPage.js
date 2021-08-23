import PostContainer from "./PostContainer"
import PostForm from "./PostForm"
import SearchSortFilter from "./SearchSortFilter"

function MainPage() {
    return (
        <div className= "ui main container">
            <p>this is mainpage</p>
            <SearchSortFilter />
            <PostForm />
            <PostContainer />
        </div>
    )
}

export default MainPage