import { AssideBar } from "./component/AssideBar";
import { Header } from "./component/Header";
import { Post } from "./Post";
import "./global.css";
import  styles from './app.module.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       <AssideBar/>

        <main>
          <Post 
          author='marlon santana'
          content='lorem mabkjbajkcbkcbçiubciuwbeibwhbwkehcbwebciuwebciwebciuwebvuewbv  jkbcievcihevbihwevb  fkejbiuebiwebifuwebifbeiwfbiewyfbiywe  ekbhwefhehv'
          />
          <Post 
           author='marlon santana'
           content='lorem mabkjbajkcbkcbçiubciuwbeibwhbwkehcbwebciuwebciwebciuwebvuewbv  jkbcievcihevbihwevb  fkejbiuebiwebifuwebifbeiwfbiewyfbiywe  ekbhwefhehv'
          />
        </main>
      </div>
    </div>
  );
}
