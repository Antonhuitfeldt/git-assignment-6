import Button from 'react-bootstrap/Button';

const OrderByGradeButton = ( {onOrderByGrade} ) => {
    return(
        <Button 
          variant="primary" 
          type="submit"
          onClick={onOrderByGrade}
        >
          Betygsordning
        </Button>
    );
}

export default OrderByGradeButton