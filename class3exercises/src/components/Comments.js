export function Comments (props) {

    console.log(props);
    function onLikeClick () {
        console.log (+1)
    }

    return (
        <div>
            {
                props.comments.map((comments, idex) => {
                    return (
                        <table>
                            <thead>
                            <tr> 
                                <th>Id</th>
                                <th>Author</th>
                                <th>Text</th>
                                <th>Likes</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td> {comments.Id}</td>
                                <td>{comments.author}</td>
                                    <td>{comments.text}</td>
                                    <td><button onClick={onLikeClick}>LIKE</button></td>


                            </tr>
                            </tbody>
                        </table>
                    );
                })}
        </div>
    );
}

