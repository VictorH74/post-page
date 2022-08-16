import ArrowUp from "components/ArrowUp";
import Footer from "components/Footer";
import Header from "components/Header"
import Post from "components/Post"
import { GlobalStyles } from "styles/Global";



function App() {
    return (
        <>
            <GlobalStyles />
            <ArrowUp />
            <Header />
            <Post />
            <Footer />
        </>
    );
}

export default App;