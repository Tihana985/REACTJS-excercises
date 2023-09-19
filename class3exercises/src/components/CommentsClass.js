import React from 'react';

export class CommentsClass extends React.Component{
    render() {

        console.log(this.props);

        function onLikeClick(){
            console.log("+1");
        }

        return(
            <div>
                {this.props.comments.map((comments) => {
                    return(
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Author</th>
                                        <th>Text</th>
                                        <th>Like</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{comments.Id}</td>
                                        <td>{comments.author}</td>
                                        <td>{comments.text}</td>
                                        <td><button onClick={onLikeClick}>LIKE</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })}
            </div>
        )
    }
}