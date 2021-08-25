import { Container, Segment, Image, Item } from "semantic-ui-react";
export default function ProfileCover() {
  return (
    <Segment className="profileCover" raised>
      <img
        className="ui fluid image"
        src="https://live.staticflickr.com/4250/34389735790_9045d855bc_o.jpg"
        size="large"
      />

      <Item.Group>
        <Item>
          {/* <Item.Image */}
          <img 
            className="profilePic"
            src="https://i.ibb.co/fnTcqdc/600-Grumpy.jpg"
            size="small"
            avatar
          />
          <Item.Content className="profilePicText">
            <Item.Header as="a">Username</Item.Header>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
}
