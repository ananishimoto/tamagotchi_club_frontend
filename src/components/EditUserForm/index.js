import { useState } from "react";

import "./style.css";

import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Form from "react-bootstrap/Form";
import { Button } from "@mui/material";
import { Col } from "react-bootstrap";
import { updateProfile } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";

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

export default function EditUserInfoForm(props) {
  const { open, handleFormClose } = props;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log("user", user);

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);

  // Cloudinary Image
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ryzmmtyg");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dcllwpbxp/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log("file", file);
    setPhotoUrl(file.url);
  };

  const sendUpdateInfo = (event) => {
    console.log("hi from submit user info", name, email);
    event.preventDefault();
    const userId = user.id;
    dispatch(updateProfile({ name, email, userId }));
  };

  return (
    <Modal
      open={open}
      onClose={handleFormClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography align="center" sx={{ fontWeight: "bold", fontSize: 30 }}>
          Update Profile
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
                placeholder="Enter new name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="text"
                placeholder="Enter new email"
              />
            </Form.Group>

            <br />
            <input type="file" onChange={uploadImage} />
            <div>
              <img
                style={{ width: 150, height: 150 }}
                src={
                  photoUrl
                    ? photoUrl
                    : "https://buy-tamagotchis.com/wp-content/uploads/woocommerce-placeholder-220x220.png"
                }
                alt="tamagotchi"
              />
              {photoUrl ? (
                <title style={{ fontSize: 20 }}>Succesfully uploaded!</title>
              ) : (
                ""
              )}
            </div>
            <br />
            <Button
              variant="primary"
              type="submit"
              style={{ backgroundColor: "#bd5487", color: "#e4ed58" }}
              onClick={sendUpdateInfo}
            >
              Update!
            </Button>
          </Form>
        </Typography>
      </Box>
    </Modal>
  );
}
