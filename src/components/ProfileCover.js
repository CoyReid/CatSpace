import { Segment, Item } from "semantic-ui-react";
export default function ProfileCover({ profileData }) {
  const { name, image, coverpic, displayname, description } = profileData;

  return (
    <Segment className="profileCover">
    <img
      className="ui fluid image"
      id = "coverphoto"
      src={coverpic}
      size="large"
      alt="a cat in wide view"
    />
    <Item.Group>
      <Item>
        <img
          className="profilePic"
          src={image}
          alt="a cat profile in circle view"
          size="small"
        />
        <Item.Content className="profilePicText">
          <Item.Header>{name}</Item.Header>
          <Item.Meta>{displayname}</Item.Meta>
          <Item.Description>{description}</Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  </Segment>
  );
}
