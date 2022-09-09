import React from 'react'
import { useSelector } from "react-redux";
import { selectPostIds } from './postsSlice'
import PostsExcerpt from './PostsExcerpt';

import { useGetPostsQuery } from './postsSlice';

const PostsList = () => {
    const { isLoading, isSuccess, isError, error } = useGetPostsQuery()

    const orderPostsIds = useSelector(selectPostIds)


    let content;
    if (isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {
        content = orderPostsIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (isError) {
        content = <p>{error}</p>;
    }

    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}

export default PostsList