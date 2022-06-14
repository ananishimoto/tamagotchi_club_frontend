import "./style.css";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Form from "react-bootstrap/Form";
import Typography from "@mui/material/Typography";
import { Col } from "react-bootstrap";
//           name:
//           age: 1,
//           deaths: 0,
//           version: "The Original",
//           generation: 2,
//           imageUrl:
//           userId: 3,
//           evolutionId: 1,
const EditTamagotchiForm = () => {
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
                      : "https://www.housesitmatch.com/wp-content/themes/petsitter/images/job-placeholder.gif"
                  }
                  alt="user-img"
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
export { EditTamagotchiForm };
