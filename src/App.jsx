import { AssideBar } from "./component/AssideBar";
import { Header } from "./component/Header";
import { Post } from "./component/Post";
import "./global.css";
import  styles from './app.module.css';


const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/marlon-santana.png',
      name: 'Marlon Santana',
      role: 'front-end develop',
    },
    content: [
      {type: 'paragraph',content:'Fala galeraa 👋'},
      {type: 'paragraph',content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da'},
      {type: 'paragraph',content:'Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link',content:'marlon.dev/doctorcare'},
    ],
    publishedAt: new Date('2022-08-11 21:17:00')
                
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       <AssideBar/>

        <main>
          <Post/>
          <Post/>
        </main>
      </div>
    </div>
  );
}
