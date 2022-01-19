import {Route, Routes} from "react-router-dom";

import {
    AlbumsPage,
    HomePage,
    NotFoundPage,
    PhotosPage,
    PostDetailsPage,
    PostsPage,
    SinglePostCommentsPage,
    SingleUserPostsPage,
    UserDetailsPage,
    UsersPage
} from "./pages";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={':posts'} element={<SingleUserPostsPage/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<AlbumsPage/>}>
                            <Route path={':albumId/photos'} element={<PhotosPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'/posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={':comments'} element={<SinglePostCommentsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
