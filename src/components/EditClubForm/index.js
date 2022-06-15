import "./style.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Form from "react-bootstrap/Form";
import { Button } from "@mui/material";
import { Col } from "react-bootstrap";
import { updateClub } from "../../store/club/thunk";

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

const EditClubForm = ({
  id,
  clubName,
  clubDescription,
  clubPictureUrl,
  clubBackground,
  clubText,
  // clubPrivate,
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [backgroundcolor, setBackgroundcolor] = useState("");
  const [textcolor, setTextcolor] = useState("");
  const [privated, setPrivated] = useState(0);

  function submitClubForm(event) {
    event.preventDefault();
    dispatch(
      updateClub(
        id,
        name !== "" ? name : clubName,
        description !== "" ? description : clubDescription,
        pictureUrl !== "" ? pictureUrl : clubPictureUrl,
        backgroundcolor !== "" ? backgroundcolor : clubBackground,
        textcolor !== "" ? textcolor : clubText,
        privated
      )
    );
    dispatch(handleClose);
    setName("");
    setDescription("");
    setBackgroundcolor("");
    setTextcolor("");
    setPrivated("");
    setPictureUrl("");
  }

  //Cloudinary image
  const [pictureUrl, setPictureUrl] = useState("");

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
    setPictureUrl(file.url); //put the url in local state, next step you can send it to the backend
  };
  // Cloudinary part

  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: "#f2944e", color: "#e4ed58" }}
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
                <Form.Label>Description</Form.Label>
                <Form.Control
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  type="text"
                  placeholder="Enter description"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicDeaths">
                <Form.Label>Background color</Form.Label>
                <Form.Control
                  value={backgroundcolor}
                  onChange={(event) => setBackgroundcolor(event.target.value)}
                  type="color"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicVersion">
                <Form.Label>Text color</Form.Label>
                <Form.Control
                  value={textcolor}
                  onChange={(event) => setTextcolor(event.target.value)}
                  type="color"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicGeneration">
                <label>
                  <input
                    type="checkbox"
                    value={privated}
                    onClick={() => setPrivated((privated) => !privated)}
                  />{" "}
                  Private
                </label>
              </Form.Group>

              <br />
              <input type="file" onChange={uploadImage} />
              <div>
                <img
                  style={{ width: 150, height: 150 }}
                  src={
                    pictureUrl
                      ? pictureUrl
                      : "https://buy-tamagotchis.com/wp-content/uploads/woocommerce-placeholder-220x220.png"
                  }
                  alt="tamagotchi"
                />
                {pictureUrl ? (
                  <title style={{ fontSize: 20 }}>Succesfully uploaded!</title>
                ) : (
                  ""
                )}
              </div>
              <Button variant="primary" type="submit" onClick={submitClubForm}>
                Save changes
              </Button>
            </Form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export { EditClubForm };
