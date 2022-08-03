import { AssideBar } from "./component/AssideBar";
import { Comment } from "./component/Comment";
import { Header } from "./component/Header";
import { Post } from "./component/Post";
import "./global.css";
import  styles from './app.module.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       <AssideBar/>

        <main>
          <Post/>
          <Post/>
          <Comment/>
        </main>
      </div>
    </div>
  );
}
