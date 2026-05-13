import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const AddMovieForm = () => {
  return (
    <Form>
      <Row className="justify-content-center">
        <Col xs={10}>  
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label column="lg" lg={2}>Titel:</Form.Label>
                <Form.Control type="text" placeholder="Skriv titel här..." />
            </Form.Group>
        </Col>    
      </Row>

      <Row className="justify-content-center"> 
        <Col xs={10}>
            <Form.Label column="lg" lg={2}>Betyg:</Form.Label>  
            <Form.Select className="mb-3" aria-label="Default select example">
                <option>Väj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="3">4</option>
                <option value="3">5</option>
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