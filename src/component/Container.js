import React, { useRef } from "react";
import { useState } from "react";
import { UploadView, InputNameView, RandomControlView, PicsView } from "./Views"

const BASE_URL = "http://startback-env.eba-urhrnn5x.eu-central-1.elasticbeanstalk.com/";

function Upload() {
  const fileInput = useRef();
  const textInput = useRef();
  const [picData, setPicData] = useState(["logo192.png"]);

  const onFileChange = (event) => {
    event.preventDefault();

    const file = fileInput.current.files[0];
    const formData = new FormData();
    formData.append("file", file);

    // let newFileName = fileInput.current.files[0].name;

    // let headers = new Headers();

    // headers.append('Content-Type', 'multipart/form-data');
    // headers.append('Accept', 'application/json');

    // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    // headers.append('Access-Control-Allow-Credentials', 'true');

    // headers.append('GET', 'POST', 'OPTIONS');

    fetch(BASE_URL + "POST", {
      method: "POST",
      body: formData,
    }).then((res) => {
      if (res.ok) {
        console.log(res.data);
        // alert("File uploaded successfully.");
      }
    });
  };

  const onRandomClick = (event) => {
    event.preventDefault();

    const fullUrl = BASE_URL + "random";

    fetch(fullUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPicData([data]);
        // alert("File received successfully.");
      });
  };

  const onGetByNameClick = (event) => {
    event.preventDefault();

    const inputName = textInput.current.value ? textInput.current.value : "";

    const fullUrl = BASE_URL + inputName;

    fetch(fullUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPicData(data)
        // alert("File received successfully.");
      });
  };

  return (
    <div className="container">
      <UploadView 
        fileInput={fileInput}
        onFileChange={onFileChange}
      />
      <InputNameView 
        textInput={textInput}
        onClick={onGetByNameClick}
      />
      <RandomControlView 
        onClick={onRandomClick}
      />
      <PicsView
        picData={picData}
      />
    </div>
  );
}

export default Upload;
