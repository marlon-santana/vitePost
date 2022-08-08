import styles from './comment.module.css';


export function Comment() {
    return (
        <div className={styles.comment}>
             <img src='https://github.com/diego3g.png'/>

             <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='03 de agosto ás 16:32' dateTime='2022-08-11 16:32'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            Delete
                        </button>  
                    </header>
                    <p>Muito bom dev, parabéns</p>

                </div>
                    <footer>
                        <button>
                        Aplaudir <span>20</span>
                        </button>
                       
                    </footer>
             </div>

        </div>    


    );
}