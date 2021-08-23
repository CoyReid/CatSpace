import PostContainer from "./PostContainer"
import PostForm from "./PostForm"
import { Container } from 'semantic-ui-react'
import SearchSortFilter from "./SearchSortFilter"

function MainPage() {
    return (
      <>
      <Container>
            <p>this is mainpage</p>
            <SearchSortFilter />
            <PostForm />
            <PostContainer />
   </Container>
        </>
    )
}

export default MainPage