import "./style.css";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";

const AddTamagotchiForm = () => {
  //Cloudinary image
  const [image, setImage] = useState("");

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    //first parameter is always upload_preset, second is the name of the preset
    data.append("upload_preset", "ryzmmtyg");

    //post request to Cloudinary, remember to change to your own link
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dcllwpbxp/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    // we can use Axios(first import it) request instead of Fetch
    // axios.post("https://api.cloudinary.com/v1_1/dwpyp7i9h/image/upload", data);
    const file = await res.json();
    console.log("file", file); //check if you are getting the url back
    setImage(file.url); //put the url in local state, next step you can send it to the backend
  };
  // Cloudinary part

  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal>
        <Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={nameSignUp}
                  onChange={(event) => setTamaName(event.target.value)}
                  type="text"
                  placeholder="Enter name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  value={age}
                  onChange={(event) => setTamaAge(event.target.value)}
                  type="number"
                  placeholder="Enter age"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicDeaths">
                <Form.Label>Deaths</Form.Label>
                <Form.Control
                  value={deaths}
                  onChange={(event) => setTamaDeaths(event.target.value)}
                  type="number"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicVersion">
                <Form.Label>version</Form.Label>
                <Form.Control
                  value={version}
                  onChange={(event) => setTamaVersion(event.target.value)}
                  type="text"
                  placeholder="The Original"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicGeneration">
                <Form.Label>generation</Form.Label>
                <Form.Control
                  value={generation}
                  onChange={(event) => setTamaGeneration(event.target.value)}
                  type="number"
                  required
                />
              </Form.Group>

              <br />
              <input type="file" onChange={uploadImage} />
              <div>
                <img
                  style={{ width: 150, height: 150 }}
                  src={
                    image
                      ? image
                      : "https://buy-tamagotchis.com/wp-content/uploads/woocommerce-placeholder-220x220.png"
                  }
                  alt="tamagotchi"
                />
                {image ? (
                  <title style={{ fontSize: 20 }}>Succesfully uploaded!</title>
                ) : (
                  ""
                )}
              </div>

              <Form.Group controlId="formBasicEvolution">
                <Form.Label>evolutionId</Form.Label>
                <Form.Control
                  value={evolutionId}
                  onChange={(event) => setTamaEvolution(event.target.value)}
                  type="number"
                  required
                />
              </Form.Group>
            </Form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export { AddTamagotchiForm };
