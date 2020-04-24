import React from 'react';
import m from './Post.module.css';

function Post(props) {

    return (
        <div className={m.item}>
            <img className={m.img}
                 src={'https://www.rd.com/wp-content/uploads/2017/10/These-Funny-Dog-Videos-Are-the-Break-You-Need-Right-Now_493370860-Jenn_C-760x506.jpg'}/>
            <div>
                {props.message}
            </div>
            <span> {props.likes} </span>

        </div>


    )
}

export default Post;