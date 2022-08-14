import styles from './Post.module.css';
import { Comment } from "./Comment";
import { Avatar } from './Avatar';
import { useState } from 'react';



export function Post({author, content, publishedAt}) {
    const [comments, setComments] = useState([
        'olá dev, ficou show!'
      ]);

      const [ newCommentText, setNewCommentText ] = useState('');

    const publishedAtFormated = new Intl.DateTimeFormat('pt-BR', {
        day:'2-digit',
        month: 'long',
        hour:'2-digit',
        minute: '2-digit',
    }).format(publishedAt)



    function handleAddComment() {
        event.preventDefault()
        
        setComments([...comments, comments.length + 1])
       
    }

    return (
    
        <article className={styles.article}>
            <header>
                <div className={styles.author}>
                    <Avatar   src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

            <time title='03 de agosto ás 07:26' dateTime='2022-08-03'>{publishedAtFormated}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p>{line.content}</p>
                    }else if (line.type ==='link') {
                        return <p><a src='#'>{line.content}</a></p>
                    }else if (line.type ==='hash') {
                        return <p><a src='#'>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleAddComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                placeholder='Deixe um comentário'
                />
                <footer>
                  <button type='submit'>Comentar</button>
                </footer>
            </form>
                {comments.map(comment => {
                    return <Comment />
                })

                }
            
        </article>
        
    );
}