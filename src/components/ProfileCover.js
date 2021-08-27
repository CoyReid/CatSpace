import { Segment, Item, Icon, Grid } from "semantic-ui-react";
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
    <Grid>
    <Item.Group>
      <Item>
        <img
          className="profilePic"
          src={image}
          alt="a cat profile in circle view"
          size="small"
        />
        <Item.Content >
          <Item.Header className="profilePicText">{name}</Item.Header>
          <div className="displayprofile">
          <Icon name="address card"/>{` : ${displayname}`}
            <p className="pdescription">"{description}"</p>
          </div>
        </Item.Content>
      </Item>
    </Item.Group>
    </Grid>
  </Segment>
  );
}
