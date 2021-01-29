import { AppHeader } from '../app-header/app-header';
import { SearchPanel } from '../seach-panel/search-panel'
import { PostStatusFilter } from '../post-status-filter/post-status-filter';
import { PostList } from '../post-list/post-list';
import { PostAddForm } from '../post-add-form/post-add-form';

export const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList/>
            <PostAddForm/>
        </div>
    )
}