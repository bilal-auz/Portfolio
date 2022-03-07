import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import TopBar from "./../topBar/TopBar";
// import resume from "./Bilal-Abouzid-Backend-Engineer-Resume-2022.pdf";

import "./myResume.scss";

export default function MyResume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    console.log(numPages);
    setNumPages(numPages);
  }

  return (
    <React.Fragment>
      <TopBar />
      <div className="app">
        <div className="sections">
          <div className="resume" id="Resume">
            <button>download</button>
            <div className="container">
              <Document file={""} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
              </Document>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
