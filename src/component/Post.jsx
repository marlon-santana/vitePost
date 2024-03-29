import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { useState } from "react";

//teste

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(["olá dev, ficou show!"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedAtFormated = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);

  function handleAddComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewcommentChange() {
    setNewCommentText(event.target.value);
  }

    function handleDeleteComment(comment) {
      const commentsFilter = comments.filter(filterComments => {
        return filterComments != comment
      })
      setComments(commentsFilter)
    }

    const isNewCommentEmpty = newCommentText.length === 0;
  return (
    <article className={styles.article}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="03 de agosto ás 07:26" dateTime="2022-08-03">
          {publishedAtFormated}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p ky={line.content}>
                <a src="#">{line.content}</a>
              </p>
            );
          } 
        })}
      </div>

      <form onSubmit={handleAddComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewcommentChange}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty  }>Comentar</button>
        </footer>
      </form>
      {comments.map((comment) => {
        return <Comment key={comment} onHandleDeleteComment={handleDeleteComment} content={comment} />;
      })}
    </article>
  );
}
