import { useState } from "react"
import { Link } from "react-router-dom"
import Register from "./Register"
function Nav(){
    const [data,SetData] = useState('Nav')
const handlechange  = ()=>{
    SetData('changed data from nav')
}
    
    return (
        <div className="flex justify-between p-5 bg-red-200">
            <ul className="flex gap-3">
                <li>
                    <a href = "https://tailwindcss.com/docs/installation/using-vite/">Home</a>
                </li>
                <li>
                    <a href ="">contact</a>
                </li>
                <li>
                    <Link to ="/register">register</Link>
                </li>
                </ul>
                <ul className="flex gap-5">
                <Link to ="/Check ">ckeck status</Link>
                <li>
                    <a href = "https://open.spotify.com/track/4vlMdXsRpAIXYggwbNHZSv?si=28bd22032faa43eb/">Song</a>
                </li>
            </ul>
        </div>
    )
}
export default Nav