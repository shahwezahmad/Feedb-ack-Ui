// import { useState } from "react"
import Card from "../common/Card"


const FeedbackItem = ({item}) => {
    // const [rating,setRating] = useState(0)
    // const [text,setText] = useState('this is from state')

    return (
        <Card >
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
            {/* <button onClick={(rating)=> setRating((rating)=>rating + rating+1)}>click</button> */}
        </Card>
    )
}
export default FeedbackItem