import { NewsItem } from "./NewsItem/NewsItem";
import { useEffect, useState } from "react";

const initNews = [
  {
    title: "1 новость",
    url: "www.example.com",
    username: "Пользователь 1",
    date: "10:10:11",
    score: 10,
    id: "1",
  },
  {
    title: "2 новость",
    url: "www.example.com",
    username: "Пользователь 2",
    date: "10:10:12",
    score: 10,
    id: "2",
  },
  {
    title: "3 новость",
    url: "www.example.com",
    username: "Пользователь 3",
    date: "10:10:13",
    score: 10,
    id: "3",
  },
]
function App() {
  const checkStorage = () => {
    return JSON.parse(window.localStorage.getItem("newskey")) || initNews
  }
  const [news, setNews] = useState(checkStorage)

  useEffect(() => {
    window.localStorage.setItem("newsKey", JSON.stringify(news))
  }, [news])

  const newNews =  {
    title: "4 новость",
    url: "www.example.com",
    username: "Пользователь 4",
    date: "10:10:14",
    score: 10,
    id: "4",
  }

  const newCountHandler = () => {
    setNews((prevState) => [...prevState, newNews])
  }
  return (
    <>
      <div>Количество новостей: {news.length}</div>
      <button onClick={newCountHandler}>Добавить новость</button>
      {
        news.map(item => {
          return <NewsItem
            key={item.id}
            title={item.title}
            url={item.url}
            username={item.username}
            date={item.date}
            score={item.score}
          >
          </NewsItem>

        }

        )
      }
    </>
  );
}

export default App;
