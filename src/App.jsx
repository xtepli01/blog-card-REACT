import BlogCard from "./components/BlogCard";
import "./index.css";

// Імпорт файлів (правильний спосіб!)
import blogImage from "./assets/images/BlogImage.png";
import avatarMale from "./assets/images/avatar_male.png";

export default function App() {
  return (
    <main>
      <BlogCard
        image={blogImage}
        category="HTML / CSS"
        title="Практична №3"
        date="Публікація 21 вересня 2025"
        description="Мета практичної роботи полягає в тому, щоб налаштувати середовище розробки VS Code, а також реалізувати картку блогу для вдосконалення фундаментальних навичок з HTML та CSS."
        author="Тепляков Олександр Дмитрович"
        avatar={avatarMale}
      />
    </main>
  );
}
