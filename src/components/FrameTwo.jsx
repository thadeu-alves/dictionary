import { Content } from "./styles"

export function FrameTwo(){
    return(
        <Content>
            <div className="left">
                <h1>Recents</h1>
                <ul>
                    <li>asas</li>
                    <li>asasas</li>
                    <li>asas</li>
                    <li>asasas</li>
                </ul>
            </div>
            <div className="right">
                <div className="card">
                    <div className="search">
                        <input type="text"/>
                        <button type="submit">search</button>
                    </div>

                    <h1>shine</h1>
                    <h2>verb</h2>

                    <p>(of the sun or another source of the light) give out a bright light.</p>

                    <span>the sun shone through of the window</span>
                </div>
            </div>
        </Content>
    )
}