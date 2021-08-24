function PostCard({post}) {
    const {created, fact, image, name, pic, likes} = post
    return (
    <div className="event">
      <div className="label">
        <img
          className="tinyIcon"
          alt="A user's personal image icon"
          src={image}
        />
      </div>
      <div className="content">
        <div className="summary">
          {name}
          <div className="date">{created}</div>
        </div>
        <img className="postPic" src={pic} alt="A user's personal post image"/>
        <div className="extra text">{fact}</div>
        <div className="meta">
          <button
            onClick={() => console.log("%ca tweet was liked", "color: red")}
            className="ui tiny basic labeled icon like button"
          >
            <i className="like icon"></i> {likes}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
