import React from 'react'
import { Link } from 'react-router-dom'
import { MakeRouteWithSubRoutes } from '../../makeRouteWithSubRoutes'

const TopicList = ({ match, routes, history }) => {
    console.log(match)
    const locationX = {
        pathname: `${match.url}/Topic1`,
        state: { someData: 'hello' }
    }

    return (
        <div>
            <h1>Topic List View</h1>
            <ul>
                <li>
                    {/* <button onClick={() => history.push(`${match.url}/Topic1`)}>Topic 1</button> */}
                    {/* <button onClick={() => history.push({
                        pathname: `${match.url}/Topic1`,
                        state: { someData: 'hello' }
                    })}>
                        Topic 1
                    </button> */}
                    {/* <Link to={locationX}>Topic 1</Link> */}
                    <Link to={`${match.url}/Topic1`}>Topic 1</Link>
                </li>
                <li>
                    <Link to={`${match.url}/Topic2`}> Topic 2</Link>
                </li>
                <li>
                    <Link to={`${match.url}/Topic3`}> Topic 3</Link>
                </li>
            </ul>
            {
                routes.map((route, index) => <MakeRouteWithSubRoutes key={index} {...route} />)
            }
        </div >
    )
}

export default TopicList