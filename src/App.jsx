import  {AssideBar } from "./component/AssideBar/index.jsx";
import { Header } from "./component/Header";
import { Post } from "./component/Post";
import "./global.css";
import  styles from './app.module.css';


const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Maikao',
      role: 'front-end develop',
    },
    content: [
      {type: 'paragraph',content:'Fala galeraa 👋'},
      {type: 'paragraph',content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da'},
      {type: 'paragraph',content:'Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link',content:'marlon.dev/doctorcare'},
      {type: 'hash',content:'#Rocketseat'},
    ],
    publishedAt: new Date('2022-08-11 21:17:00')
                
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'front-end develop',
    },
    content: [
      {type: 'paragraph',content:'Fala galeraa 👋'},
      {type: 'paragraph',content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da'},
      {type: 'paragraph',content:'Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link',content:'marlon.dev/doctorcare'},
    ],
    publishedAt: new Date('2022-08-09 21:17:00')
                
  }

]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
       <AssideBar/>
        <main>
          {
            post.map(post => {
              return (
                <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                />
              )
            })
          }
          
        </main>
      </div>
    </div>
  );
}
