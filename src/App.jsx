import { AssideBar } from "./component/AssideBar";
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
        </main>
      </div>
    </div>
  );
}
