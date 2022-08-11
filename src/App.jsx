import { Post } from "./components/Post" 
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"

import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/FranciscoMaik.png",
      name: "Francisco Maik",
      role: "Web Development"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date("2022-05-03 21:00:23"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/test.png",
      name: "Antonio",
      role: "Backend Development"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date("2022-08-20 21:00:23"),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar />

        <main>
          {posts.map((post) => (
            <Post 
              key={post.id} 
              author={post.author} 
              content={post.content} 
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
      
    </div>
  )
}
