import { Segment } from 'semantic-ui-react'

function Profile({usersData}) {
  const {image, name, posts} = usersData[0];
  console.log(image,name,posts)  
  return (
      <div className="ten wide column">
          <h2 header>profile name</h2>
      <Segment>
    <p>This will be about section with back pic and stuff</p>
      </Segment>
      <Segment>
    <p> stuff goes here</p>
      </Segment>
      </div>
    )
}

export default Profile