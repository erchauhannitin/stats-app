import React from "react";

function onChange(event) {
  let input = document.querySelector("input");
  let files = input.files;

  if (files.length === 0) return;
  const file = files[0];
  let reader = new FileReader();

  reader.onload = (event) => {
    const file = event.target.result;
    const allLines = file.split(/\r\n|\n/);
  };
  reader.readAsText(file);
}

function FileRead() {
  return (
    <div>
      <input type="file" onChange={onChange} />
      <textarea cols="30" rows="20"></textarea>
    </div>
  );
}

export default FileRead;
