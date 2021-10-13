import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./component/navbar/Navbar";
import Banner from "./component/navbar/Banner";
import Step from "./pages/Section3";
import Temoin from "./pages/Section4";
import Guarantee from "./pages/Section5";
import Honest from "./pages/Section6";
import Question from "./pages/Section7";
import Footer from "./component/Footer/Footer";
import storage, { FirebaseContext } from "./Firebase";
import { ScrollingProvider, Section } from "react-scroll-section";
function App() {
  const [files, setFiles] = useState();
  useEffect(() => {
    const fetchImages = async () => {
      let result = await storage.ref().child("asset").listAll();
      let urlPromises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );

      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();
      setFiles(urls);
    };
    loadImages();
  }, []);

  return (
    <div className="position-relative ">
      <FirebaseContext.Provider value={files}>
        <ScrollingProvider>
          <Navbar></Navbar>

          <Section id="home">
            <Banner />
          </Section>

          <Section id="work">
            <Step />
          </Section>

          <Section id="about">
            <Guarantee />
          </Section>

          <Section id="schedule">
            <Honest />
          </Section>

          <Section id="reviews">
            <Temoin />
          </Section>
          <Section id="blog">
            <Question />
          </Section>

          <Footer />
        </ScrollingProvider>
      </FirebaseContext.Provider>
    </div>
  );
}

export default App;
