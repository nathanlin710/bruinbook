import './App.css';
import CreatePost from './components/CreatePost';
import Page from './components/Post'
import Signup from './components/Signup'
function App() {
  return (
    <div>
    <Signup />
    <CreatePost />
    <Page />
    </div>
  );
}

export default App;