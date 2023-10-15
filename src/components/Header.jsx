
import PropTypes from 'prop-types'
const Header = ({text}) => {
 const  headerStyle = {
        backgroundColor:'green',
        color:'blue'
    }
    return (
        <div className={headerStyle}>
            <h1 style={{textAlign:'center'}}>Feedback UI</h1>
        </div>
    )
}
Header.defaultProps = {
    text:'ahmad'
}
Header.propTypes = {
    text:PropTypes.string
}


export default Header