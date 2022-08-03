import styles from './comment.module.css';


export function Comment() {
    return (
        <div className={styles.comment}>
             <img  src='https://avatars.githubusercontent.com/u/72947608?v=4'/>

             <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Marlon Santana</strong>
                            <time title='03 de agosto ás 16:32' dateTime='2022-08-11 16:32'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            Delete
                        </button>  
                    </header>

                </div>

             </div>

        </div>    


    );
}