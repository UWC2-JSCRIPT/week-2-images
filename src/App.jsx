import "./App.css";
import Picture from "./Picture";

function App() {
  const img1 =
    "https://images.pexels.com/photos/18154838/pexels-photo-18154838/free-photo-of-spring.jpeg";
  const img2 =
    "https://images.pexels.com/photos/17066896/pexels-photo-17066896/free-photo-of-minimalistic-interior-design.jpeg";

  const alt1 = "Three Trees";
  const alt2 = "Two Chairs";

  return (
    <div>
      <Picture imgSrc={img1} imgAlt={alt1} />
      <Picture imgSrc={img2} imgAlt={alt2} />
    </div>
  );
}

export default App;
