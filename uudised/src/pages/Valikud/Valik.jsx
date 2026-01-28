import { Link } from "react-router-dom"


function Valik() {
  return (
    <div>
            <Link to="/months">
            <button>Months</button>
            </Link> 
           <Link to="/animals">
            <button>Animals</button>
            </Link> 
           <Link to="/words">
            <button>Words</button>
            </Link> 

        
    </div>
  )
}

export default Valik