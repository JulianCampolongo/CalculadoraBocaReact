import react from "react";
import Button from "./Button/Button";
import PropTypes from 'prop-types'

const Functions = ({onContentClear, onDelete})=> (
  <section className="functions">
    <Button type="button-long-text" text="clear" clickHandler={onContentClear}></Button>
    <Button type="button-long-text" text="del" clickHandler={onDelete}></Button>
    
    </section>
)

Functions.propTypes = {
  onContentClear: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Functions
