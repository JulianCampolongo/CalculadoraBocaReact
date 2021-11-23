import react from "react";
import PropTypes from 'prop-types'
import Button from "./Button/Button";

const MathOperations = ({onClickOperation, onClickEqual}) => (
    <section className="math-operations" >
        <Button text="+" clickHandler={onClickOperation}></Button>
        <Button text="-" clickHandler={onClickOperation}></Button> 
        <Button text="*" clickHandler={onClickOperation}></Button> 
        <Button text="/" clickHandler={onClickOperation}></Button> 
        <Button text="=" clickHandler={onClickEqual}></Button> 
        </section>
)

MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default MathOperations