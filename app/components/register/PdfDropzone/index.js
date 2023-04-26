import React, { useEffect, useState } from "react";
import "./index.css";
import { Typography } from "@mui/material";

function PDFDropzone(props) {
  const { onFileChange, selectedFile } = props;

  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (selectedFile) setFile(selectedFile);
  }, []);

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];

    // Check file type and size
    if (
      droppedFile.type === "application/pdf" &&
      droppedFile.size <= 2 * 1024 * 1024
    ) {
      setFile(droppedFile);
      onFileChange(droppedFile);
      setError("");
    } else {
      setFile(null);
      onFileChange(null);
      setError(
        "Invalid file. Please drop a PDF file with a maximum size of 2MB."
      );
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsHovered(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsHovered(false);
  };

  const handleClick = (event) => {
    event.preventDefault();
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".pdf";
    fileInput.onchange = (event) => {
      const selectedFile = event.target.files[0];
      if (
        selectedFile &&
        selectedFile.type === "application/pdf" &&
        selectedFile.size <= 2 * 1024 * 1024
      ) {
        setFile(selectedFile);
        onFileChange(selectedFile);
        setError("");
      } else {
        setFile(null);
        onFileChange(null);
        setError(
          "Invalid file. Please select a PDF file with a maximum size of 2MB."
        );
      }
    };
    fileInput.click();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={handleClick}
      className="dropzone"
    >
      {file ? (
        <div className="dropzone-not-activated">
          <Typography variant="subtitle2">{file.name}</Typography>
        </div>
      ) : (
        <div className="dropzone-not-activated">
          <img
            src="/gray-cross.png"
            className="dropzone-img"
            alt="gray cross logo"
          />
          <Typography variant="subtitle2" sx={{ alignSelf: "flex-end" }}>
            CV/Resume
          </Typography>
        </div>
      )}

      {error && (
        <div className="cv-error">
          {" "}
          <Typography>{error}</Typography>
        </div>
      )}
    </div>
  );
}

export default PDFDropzone;
