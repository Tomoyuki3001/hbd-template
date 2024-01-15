import Navbar from "./Pages/Navbar";
import TopPage from "./Pages/TopPage";
import Progress from "./Pages/Progress";
import Footer from "./Pages/Footer";
import Photos from "./Pages/Photos";
import Messages from "./Pages/Messages";

function App() {
  return (
    <div className="container">
      <Navbar />
      <TopPage />
      <Progress />
      <Photos />
      <Messages />
      <Footer />
    </div>
  );
}

export default App;
