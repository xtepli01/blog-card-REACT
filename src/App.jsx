import BlogCard from "./components/BlogCard";   // імпорт компонента
import "./index.css";                           // глобальні стилі

export default function App() {
  return (
    <main>
      <BlogCard
        image="/assets/images/Blog Image.png"
        category="HTML / CSS"
        title="Практична №3"
        date="Публікація 21 вересня 2025"
        description="Мета практичної роботи полягає в тому, щоб налаштувати середовище розробки VS Code, а також реалізувати картку блогу для вдосконалення фундаментальних навичок з HTML та CSS."
        author="Тепляков Олександр Дмитрович"
        avatar="/assets/images/avatar_male.png"
      />
    </main>
  );
}
