import React from "react";
import { useState } from "react-redux";
import axios from "axios";
const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);
  const handleUpload = () => {
    if (!file) {
      setMsg("No file selected");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    setMsg("Uploading file.....");
    setProgress((prevState) => {
      return { ...prevState, started: true };
    });
    axios
      .post(url, formData, {
        onUploadProgress: (progressEvent) => {
          setProgress((prevState) => {
            return { ...prevState, pc: progressEvent.progress * 100 };
          });
        },
        headers: {
          "Custom-Header": "value",
        },
      })
      .then((res) => {
        setMsg("Uploaded successfullly");
        console.log(res.data);
      })
      .catch((err) => {
        setMsg("Upload Failed");
        console.error(err);
      });
  };
  return (
    <div>
      <h1>Uploading Files</h1>
      <input
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
        type="file"
      />
      <button onClick={handleUpload}></button>
      {progress.started && <progress max="100" value={progress.pc}></progress>}
      {mag && <span>{msg}</span>}
    </div>
  );
};

export default FileUpload;
