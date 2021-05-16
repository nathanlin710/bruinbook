import CreatePost from './CreatePost';
import Post from './Post'
import NavBar from './NavBar'
function Home () {
    return (
        <div>
            <NavBar />
            <CreatePost />
            <Page />
        </div>
    ) 
}
export default Home;