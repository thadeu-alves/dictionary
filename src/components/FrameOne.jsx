import { Link } from 'react-router-dom'
import { Home } from './styles'

export function FrameOne(){
    return(
        <Home>
            <div>
                <h2>Your</h2>
                <h1>Vocabulary</h1>
                <p>For english students and enjoyers.</p>
                <Link to="search"><button>Getting started for free</button></Link>
            </div>
        </Home>
    )
}