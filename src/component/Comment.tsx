import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './comment.module.css';



interface Content {
    type: 'paragraph' | 'link';
    content: string;
  }

interface CommentProps {
    content: string;
    onHandleDeleteComment: (comment: string) => void;
}


export function Comment({content, onHandleDeleteComment}: CommentProps) {

    const [like, setLike ] = useState(0);

        function deleteComment() {
            onHandleDeleteComment(content)
        }

        function AddLike() {
            setLike((old) => old + 1)
           
        }
    
    return (
        <div className={styles.comment}>

             <Avatar hasBorder={false} src='https://github.com/marlon-santana.png'/>

             <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='03 de agosto ás 16:32' dateTime='2022-08-11 16:32'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={deleteComment} title='Deletar comentário'>
                            Delete
                        </button>  
                    </header>
                    <p>{content}</p>

                </div>
                    <footer>
                        <button onClick={AddLike}>
                        Aplaudir <span>{like}</span>
                        </button>
                       
                    </footer>
             </div>

        </div>    


    );
}