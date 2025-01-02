import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
function Contacts() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen mt-16 pt-10">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Contacts;