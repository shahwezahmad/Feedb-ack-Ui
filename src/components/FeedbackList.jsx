import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'


const FeedbackList = ({feedback}) => {

    return (
        <div className="feedback-list">
            {feedback.map( (item)=> (
                <FeedbackItem key={item.id} item={item } />
            ) )}

        </div>
    )
}
FeedbackList.defaultProps = {
    feedback: PropTypes.arrayOf({
        id:PropTypes.shape().number
    }
    )
}
export default FeedbackList