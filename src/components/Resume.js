import React from 'react';
import '../css/App.css';
import resume from '../assets/resume.pdf';
import { Document, Page } from 'react-pdf';

function Resume() {

    function changeBackground(e) {
        e.target.style.background = '#E5989B';
        e.target.style.transition = '0.3s';
    }

    function resetBackground(e) {
        e.target.style.background = '#B5838D';
        e.target.style.transition = '0.3s';
    }

    function downloadFile(e) {
        e.preventDefault();
        window.location.href = 'https://dl.dropboxusercontent.com/s/p1mzgm2jubiyr03/resume.pdf?dl=0';
    }

    return(
        <div className="resume-container">
            <button className="download-button" onMouseOver={changeBackground} onMouseLeave={resetBackground} onClick={downloadFile}>
               Download
            </button>
            <Document className="resume-pdf" file={resume}>
                <Page pageNumber={1} />
            </Document>
        </div>
    )
}

export default Resume