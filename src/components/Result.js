import react from "react";
import PropTypes from 'prop-types'


const Result = ({value}) => (
     <div className="result">
        <img className="escudo" src="https://img.icons8.com/color/480/000000/club-atletico-boca-juniors.png"/>
        
            {value}
        </div>
    )
    


Result.propTypes = {
    value: PropTypes.string.isRequired


}

Result.defaultProps = {
    value: "0"
}
export default Result