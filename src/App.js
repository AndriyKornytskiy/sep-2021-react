import {Route, Routes} from "react-router-dom";

import {HomePage, NotFoundPage, PostDetailsPage, PostsPage, SingleUserPostsPage, UserDetailsPage, UsersPage} from "./pages";
import Layout from "./components/Layout/Layout";
import {SinglePostCommentsPage} from "./pages/SinglePostCommentsPage/SinglePostCommentsPage";

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
