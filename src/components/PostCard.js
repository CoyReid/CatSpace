function PostCard({ post, handleLike, darkMode }) {
  const { created, fact, image, name, pic, likes } = post;
  
  function handleClick(){
    const updatedPost = {
      ...post,
      likes: likes + 1,
    }
    handleLike(post.id, updatedPost)
  }
  
  return (
  
    <div className="event" >
      <div className="label">
        <img
          className="tinyIcon"
          alt="A user's personal icon"
          src={image}
        />
      </div>
      <div className="content">
        <div className="summary">
          {name}
          <div className="date">{created}</div>
        </div>
        <img id="postPic" src={pic} alt="A user's personal post"  className="ui fluid image"/>
         <div className="extra text">{fact}</div>
        <div className="meta">
          <button
          className={`ui tiny basic labeled icon like button  ${darkMode ? "inverted" : ""}`}
            onClick={handleClick}
            // className="ui tiny basic labeled icon like button inverted"
          //  {{darkMode} ? {className="ui tiny basic labeled icon like button "} : {className="ui tiny basic labeled icon like button inverted"}}
          >
            <i className="like icon"></i> {likes}
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default PostCard;
