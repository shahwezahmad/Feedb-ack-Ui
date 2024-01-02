import { Link } from "react-router-dom"
import Card from "../common/Card"


const About = () => {

    return (
        <Card>
            <h1>Feedback is demo app to give feedback</h1>
            <Link to="/">
                go to home
            </Link>
        </Card>
    )
}
export default  About