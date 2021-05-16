import CreatePost from './CreatePost';
import Post from './Post'
function Home () {
    return (
        <div>
            <CreatePost />
            <Post 
                username = "Hello"
                image = "Sonic.jpg"
                caption = "Zoom Zoom, I'm off to visit UCLA. You don't think your prolonged isolation is making you a bit crazy, perhaps? (as the patient, lying on the couch) Crazy?! Me? No way, Doc. You got me all wrong. (back as the doctor) And despite all these so-called friends of yours, (takes off the glasses, normal voice) deep down, (sad) you're still rather lonely?"
                comments = {[["user1", "hello there"], ["user2", "hello bear"]]}
            />
            <Post 
                username = "Goodbye"
                image = "eggman.jpg"
                caption = "Hello world, I am Mr. Eggman. You fool, away! Before I make mincemeat out of you! Curse you, Sonic! Not only do you foil my plans, but you foil my speeches as well! I work hard on them!"
                comments = {[["user1", "hello there"], ["user2", "hello bear"], ["TSM LOST", "pew pew"], ["user2", "hello bear"], ["TSM LOST", "pew pew"], ["user2", "hello bear"], ["TSM LOST", "pew pew"]]}
            />
        </div>
    ) 
}
export default Home;