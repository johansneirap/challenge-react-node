import React, { useEffect } from 'react';

export const PostSingle = ({post}) => {
  useEffect(() => {
    console.log(post)
  }, []);
    return (
        <tr>
            <th scope="row">{post.name}</th>
            <td>{post.description}</td>
            <td className="td-action">
                <button className="btn btn-danger">Eliminar</button>
            </td>
        </tr>
    );
};
