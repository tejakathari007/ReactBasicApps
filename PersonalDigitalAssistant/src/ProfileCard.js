function ProfileCard({ title, handle, image, content }) {
  // const { title, handle } = props;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="iamge is-1by1">
          <img src={image} alt="Assistant-image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-contenrt">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">{content}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
