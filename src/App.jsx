import Description from "./components/Description/Description";
import Details from "./components/Details/Details";
import Photoviewer from "./components/Extras/Photoviewer";
import Donwloadnav from "./components/Extras/donwloadnav";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Mobilenav from "./components/Mobilenav/Mobilenav";
import Morelike from "./components/Morelike/Morelike";
import Navbar from "./components/Nav/Navbar";
import Online from "./components/Online/Online";

function App() {
  return (
    <div
      style={{ display: "flex", position: "relative", flexDirection: "column" }}
    >
      <Photoviewer />
      <Donwloadnav />
      <Mobilenav />
      <Header />
      <Navbar />
      <Main />
      <Description />
      <Details />
      <Online />
      <Morelike />
      <Footer />
    </div>
  );
}

export default App;
