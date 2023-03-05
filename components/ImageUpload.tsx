import React, { useState } from "react";

//const [image, setImage] = useState(null);

const handleImageUpload = (/*event*/) => {
  /*const file = event.target.files[0];
  setImage(file);*/
}

const uploadImage = () => {
  /*const formData = new FormData();
  formData.append('image', image);

  // Replace <YOUR_SERVER_ENDPOINT> with your server's endpoint for image upload
  fetch('<YOUR_SERVER_ENDPOINT>', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));*/
}

export default function ImageUpload() {
    
    return (
      <div className="image-upload-wrapper">
        <div>
          <h2>Upload an image here:</h2>
        </div>
        <div>
          <input type="file" onChange={handleImageUpload} />
        </div>
        <div>
          <button onClick={uploadImage}>Submit</button>
        </div>
      </div>
    );
  }
  