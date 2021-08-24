import { Card, Icon, Image } from "semantic-ui-react";

function FriendCard({ obj }) {
  const {name, image} = obj;

  return (
      <Card className="friendCards">
        <Image src={image} alt="A profile image of a cat" wrapped ui={false}
        />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>DESC GOES HERE</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Icon name="user" />
            3 Friends
        </Card.Content>
      </Card>
  );
}

export default FriendCard;
