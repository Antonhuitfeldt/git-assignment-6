import Button from 'react-bootstrap/Button';

const OrderByAlphaButton = ( {onOrderByAlpha} ) => {
    return(
        <Button 
          variant="primary" 
          type="submit"
          onClick={onOrderByAlpha}
        >
          Alfabetisk ordning
        </Button>
    );
}

export default OrderByAlphaButton