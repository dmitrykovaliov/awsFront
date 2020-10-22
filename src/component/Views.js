import React from "react";

export const UploadView = ({ fileInput, onFileChange }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="form-group files color">
          <label>Upload File</label>
          <input
            type="file"
            ref={fileInput}
            className="form-control"
            name="file"
            onChange={onFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export const InputNameView = ({ textInput, onClick }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="form-group files color">
          <label>Input File Name</label>
          <input
            type="text"
            ref={textInput}
            className="form-control"
            name="text"
          />
        </div>
        <div className="form-group files color">
          <button onClick={onClick}>Enter file name</button>
        </div>
      </div>
    </div>
  );
};

export const RandomControlView = ({ onClick }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="form-group files color">
          <button onClick={onClick}>Random</button>
        </div>
      </div>
    </div>
  );
};

export const PicsView = ({ picData }) => {
  return picData.map((pic) => (
    <div key={pic.id} className="row">
      <div className="col-md-6">
        <div className="form-group files color">
          <section>
            <img src={pic.path} alt="From S3" />
          </section>
        </div>
      </div>
    </div>
  ));
};
