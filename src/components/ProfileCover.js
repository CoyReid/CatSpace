
import { Container, Segment, Image, Card} from "semantic-ui-react";
export default function ProfileCover(){

  return (

<Card fluid color='red'>

<img class="ui fluid image" src='https://live.staticflickr.com/4250/34389735790_9045d855bc_o.jpg' size='large' bordered />
 <Container>

   <img class="ui small circular image" style= {{position:"relative", left:"5px", top:"-60px"}} src="https://i.ibb.co/fnTcqdc/600-Grumpy.jpg"/>
   <h3> username </h3>
   </Container>
  </Card>

  )
}