import { Button, Segment, Form } from "semantic-ui-react";
import { useState } from "react";

function PostForm({ usersData, addPost }) {
  const [formData, setFormData] = useState({
    pic: "",
    fact: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  function handleSubmit(e) {
    const userPosts = usersData[0].posts;
    let newId = parseInt(userPosts[userPosts.length - 1].id) + 1;
    e.preventDefault();
    const newPost = {
      ...formData,
      likes: 0,
      created: new Date(),
      name: "@Grumpy211",
      image: "https://i.ibb.co/fnTcqdc/600-Grumpy.jpg",
      id: newId,
    };
    const newUserPosts = [...usersData[0].posts, newPost];
    const newUserObj = {
      ...usersData[0],
      posts: newUserPosts,
    }
    fetch("http://localhost:8000/users/1", {
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(newUserObj)
    })
    .then(r => r.json())
    .then(addPost)
    setFormData({
      ...formData,
      pic: "",
      fact: "",
    });
  }
  
  return (
    <div className="ten wide column">
      <Segment>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            label="Create a post"
            placeholder="write something..."
            value={formData.fact}
            onChange={handleChange}
            name="fact"
          />
          <Form.Input
            placeholder="paste an image..."
            value={formData.pic}
            onChange={handleChange}
            name="pic"
          />
          <Button type="submit">Meow</Button>
        </Form>
      </Segment>
    </div>
  );
}

export default PostForm;
