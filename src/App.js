import React from "react";
import Navbar from "./Components/Navbar";
import MiddelText from "./Components/MiddelText";
import ImageSlider from "./Components/ImageSider";
import TextandCard from "./Components/TextandCard";
import ComingSoon from "./Components/CommingSoonPage";
import { Routes, Route } from "react-router-dom";
import Details from "./Components/Details";
import DataInfoSection from "./Components/DataInfoSection";
import DirectorMessage from "./Components/DirectorsMessage";
import SignUpForm from "./Components/SignUpForm";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <MiddelText />
            <ImageSlider />
            <TextandCard />
            
            <DirectorMessage/>
            <Details />
            <DataInfoSection />
            <ContactForm/>


          </>
        }
      />

      <Route
        path="/program"
        element={
          <>
            <Navbar />
            <ComingSoon />
          </>
        }
      />
      <Route
        path="/resources"
        element={
          <>
            <Navbar />
            <ComingSoon />
          </>
        }
      />
      <Route
        path="/sign-in"
        element={
          <>
            <Navbar />
            <SignUpForm />
            
          </>
        }
      />
      <Route
        path="/about-us"
        element={
          <>
            <Navbar />
            <ComingSoon />
          </>
        }
      />
    </Routes>
  );
}

export default App;
