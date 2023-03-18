import React from 'react';
import ReactDOM from 'react-dom/client';
import { NewsItem } from "./NewsItem/NewsItem";
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App></App>
    <NewsItem
      title="Первая новость"
      url="www.example.com"
      username="Пользователь"
      date="10:10:11"
      score={10}
    >
    </NewsItem>
  </>
);