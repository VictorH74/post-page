import Header from "./header"
import Post from "./post"
import ArrowUp from "./assets/arrow-upward.svg"


function App() {
  return (
    <>
      <Header />
      <Post />
      <div className="arrow-up">
        <a href="#"><img src={ArrowUp} alt="arrow upward"/></a>
      </div>
    </>
  );
}

export default App;
