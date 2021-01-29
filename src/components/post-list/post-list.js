import {PostListItem} from '../post-list-item/post-list-item'

export const PostList = () => {
    return (
        <ul className="app-list list-group">
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
        </ul>
    )
}