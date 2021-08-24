
import { Container, Segment, Image, Card} from "semantic-ui-react";
export default function ProfileCover(){

  return (

<Segment className="profileCover" raised>

<img className="ui fluid image" src='https://live.staticflickr.com/4250/34389735790_9045d855bc_o.jpg' size='large'/>
 <Container>

   <img class="ui small circular image" style= {{position:"relative", left:"5px", top:"-80px", }} src="https://i.ibb.co/fnTcqdc/600-Grumpy.jpg"/>   
   <h3 > username </h3>

   </Container>
   </Segment>

  )
}