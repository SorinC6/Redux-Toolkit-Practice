import React from 'react'
import { useSelector } from "react-redux";
import { selectPostIds, getPostStatus, getPostError } from './postsSlice'
import PostsExcerpt from './PostsExcerpt';

const PostsList = () => {
    const orderPostsIds = useSelector(selectPostIds)
    const postsStatus = useSelector(getPostStatus)
    const postsError = useSelector(getPostError)



    let content;
    if (postsStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postsStatus === 'succeeded') {
        content = orderPostsIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (postsStatus === 'failed') {
        content = <p>{postsError}</p>;
    }

    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}

export default PostsList