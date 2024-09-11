import { Link, Outlet } from "react-router-dom"

const Template = ()=>{
    return <div>
        <Link to="/">heme</Link><br/>
        <Link to={"/test"}>test</Link>
        <hr/>
        <Outlet />
    </div>
}
export default Template