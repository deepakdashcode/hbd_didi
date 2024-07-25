import React from "react";
import ReactVideoGallery from "./component/ReactVideoGallery";
import GalleryImg from "./component/GalleryImg";
import './index.css';
function App() {
  return (
    <>
    <h1 className="bg-black text-[30px] text-center p-3" style={{color: 'whitesmoke'}}>Happy Birthday Sisss 🤫</h1>
    <ReactVideoGallery/>
    <h1 className="bg-black text-[30px] text-center p-3" style={{color: 'whitesmoke'}}>Some Memories</h1>
    <GalleryImg/>
    </>
  );
}

export default App;
