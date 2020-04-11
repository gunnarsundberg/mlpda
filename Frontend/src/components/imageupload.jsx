import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import '../main.css';
import Image from '../image_upload_doctor.jpeg';
import axios from 'axios';
class Imageupload extends React.Component {

  state = {
    Token: 'f2c2d02731aab9e6923eeee7018f31341240cf1d',
    image: null
  };

    handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
   e.preventDefault();
   console.log(this.state);
   let form_data = new FormData();
   form_data.append('image', this.state.image, this.state.image.name);
   let url = 'http://127.0.0.1:8000/api/v1/predict/';
   axios.post(url, form_data, {
     headers: {
       'Token': 'f2c2d02731aab9e6923eeee7018f31341240cf1d',
       'content-type': 'multipart/form-data'
     }
   })
       .then(res => {
         console.log(res.data);
       })
       .catch(err => console.log(err))


  };



  render() {
    return (
<div>
<div className="welcome-section">
  <p className="page-header">Image Upload</p>
  <img src={Image} alt="image_upload_doctor" width="640" height="340"/>
</div>

<div className="upload-x-ray-section">
  <p className="upload-x-ray-statement">Upload Your X-Ray to Find the Probability of Pneumonia</p>
  <form className="form-for-x-ray" target="uploadfiles.php" method="post" enctype="multipart/form-data">
  <input className="x-ray-upload" name="xRayUpload" type="file" id="image" accept="image/png, image/jpeg, image/jpg" onChange={this.handleImageChange} required/>
  <input className="x-ray-submit-btn" type="submit" value="Upload" onClick={this.handleSubmit} />
</form>
</div>

  <Link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
  <Link rel="stylesheet" href="main.css"/>
</div>
    )
  }
}
export default Imageupload
