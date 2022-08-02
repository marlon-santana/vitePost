export function Post(props) {
    return (
        <>
       <strong> <h1>{props.author}</h1> </strong>
        <p>{props.content}</p>
        </>
    );
}