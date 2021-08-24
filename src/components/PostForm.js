import { Button, Segment, Form } from "semantic-ui-react";

function PostForm() {
  return (
    <div className="ten wide column">
      <Segment>
        <Form>
          <Form.TextArea
            label="Create a post"
            placeholder="write something..."
          />
          <Button type="submit">Post</Button>
        </Form>
      </Segment>
    </div>
  );
}

export default PostForm;
