import "./style.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Form from "react-bootstrap/Form";
import { Button } from "@mui/material";
import { Col } from "react-bootstrap";
import { editTamaForm } from "../../store/tamagotchi/thunk";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "#f2944e",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "90%",
  overflow: "auto",
  borderRadius: "20px",
};

const EditTamagotchiForm = ({
  id,
  nameTama,
  ageTama,
  deathsTama,
  versionTama,
  generationTama,
  imageTama,
  evolutionIdTama,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState(nameTama);
  const [age, setAge] = useState(ageTama);
  const [deaths, setDeaths] = useState(deathsTama);
  const [version, setVersion] = useState(versionTama);
  const [generation, setGeneration] = useState(generationTama);
  const [evolutionId, setEvolutionId] = useState(evolutionIdTama);

  const dispatch = useDispatch();

  function submitEditTamaForm(event) {
    console.log("hi");
    event.preventDefault();
    dispatch(
      editTamaForm(
        id,
        name,
        age,
        deaths,
        version,
        generation,
        image,
        evolutionId
      )
    );
    setOpen(false);
  }

  //Cloudinary image
  const [image, setImage] = useState(imageTama);

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
      <Button
        style={{ backgroundColor: "#bd5487", color: "#5d3c76" }}
        variant="contained"
        onClick={handleOpen}
      >
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  placeholder="Enter name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                  type="number"
                  placeholder="Enter age"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicDeaths">
                <Form.Label>Deaths</Form.Label>
                <Form.Control
                  value={deaths}
                  onChange={(event) => setDeaths(event.target.value)}
                  type="number"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicVersion">
                <Form.Label>version</Form.Label>
                <Form.Control
                  value={version}
                  onChange={(event) => setVersion(event.target.value)}
                  type="text"
                  placeholder="The Original"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicGeneration">
                <Form.Label>generation</Form.Label>
                <Form.Control
                  value={generation}
                  onChange={(event) => setGeneration(event.target.value)}
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
                  onChange={(event) => setEvolutionId(event.target.value)}
                  type="number"
                  required
                />
              </Form.Group>
              <br />
              <Button
                variant="primary"
                type="submit"
                style={{ backgroundColor: "#bd5487", color: "#e4ed58" }}
                onClick={submitEditTamaForm}
              >
                Edit Tamagotchi
              </Button>
            </Form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export { EditTamagotchiForm };
