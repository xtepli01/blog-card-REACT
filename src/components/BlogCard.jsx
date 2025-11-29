import "./Card.css";   // стилі саме цього компонента

export default function BlogCard({
  image,
  category,
  title,
  date,
  description,
  author,
  avatar,
}) {
  return (
    <div className="card1">
      {/* Зображення */}
      <div className="blog-image-wrapper">
        <img 
          src={image}
          alt="blog image"
          className="blog-image"
        />
      </div>

      {/* Основний контент */}
      <div className="card2">
        <span className="lang">{category}</span>
        <p className="date">{date}</p>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>

      {/* Футер */}
      <div className="footer">
        <img 
          src={avatar}
          alt="avatar"
          className="avatar_male"
        />
        <p className="author">{author}</p>
      </div>
    </div>
  );
}
