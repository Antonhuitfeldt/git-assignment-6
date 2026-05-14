import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState("0");

  const handleSubmitButton = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      alert("Du måste ange en titel!");
      return;
    }

    if (grade === "0") {
      alert("Du måste ange ett betyg!");
      return;
    }

    const movie = {
      title: title,
      grade: Number(grade)
    };

    onAddMovie(movie);

    setTitle("");
    setGrade("0");
  }

  return (
    <Form onSubmit={handleSubmitButton}>
      <Row className="justify-content-center">
        <Col xs={10}>  
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label column="lg" lg={2}>Titel:</Form.Label>
                <Form.Control
                 type="text" 
                 placeholder="Skriv titel här..." 
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>
        </Col>    
      </Row>

      <Row className="justify-content-center"> 
        <Col xs={10}>
            <Form.Label column="lg" lg={2}>Betyg:</Form.Label>  
            <Form.Select 
             className="mb-3" 
             aria-label="Default select example"
             value={grade}
             onChange={(e) => setGrade(e.target.value)}
            >
                <option value="0">Väj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Form.Select>
        </Col>
      </Row>

      <Button variant="success" type="submit">
        Spara film
      </Button>
    </Form>
  );
}

export default AddMovieForm;