import styles from './Post.module.css';
import { Comment } from "./Comment";

export function Post() {
    return (
    
        <article className={styles.article}>
            <header>
                <div className={styles.author}>
                    <img  className={styles.avatar} src='https://avatars.githubusercontent.com/u/72947608?v=4'/>
                    <div className={styles.authorInfo}>
                        <strong>Marlon Santana</strong>
                        <span>Develop</span>
                    </div>
                </div>

            <time title='03 de agosto ás 07:26' dateTime='2022-08-03'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da</p>
                <p>Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>  <a href=''>marlon.dev/doctorcare</a></p>
                <p>
                    <a href= ''>#novoprojeto</a>{' '}
                    <a href= ''> #nlw </a>{' '}
                    <a href= ''>#rocketseat</a>{' '}
                    </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                placeholder='Deixe um comentário'
                />
                <footer>
                  <button type='submit'>Comentar</button>
                </footer>
            </form>
                <Comment />
            
      
        </article>
        
    );
}