import React from "react";
import Footer from "./Components/footer";
import Header from "./Components/header";
function App() {
    return (
        <div>
            <Header/>
            <h1>My awesome website in React</h1>
            <h3>Reasons I ❤️React</h3>
            <ol>
                <li>It's composable</li>
                <li>It's declarative</li>
                <li>It's a hireable skill</li>
                <li>It's actively maintained by skilled people</li>
            </ol>
            <Footer/>
        </div>
    )
};
export default App;
