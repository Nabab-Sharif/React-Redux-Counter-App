import { Link } from "react-router-dom"
import { useSelector } from "react-redux"


const ReuseCounter = () => {

  let reuseData = useSelector((state) => state.counter.value)

  return (
    <>
      <div className="container">

        <div className="d-flex justify-content-center align-items-center m-5">

          <div className="card text-center" style={{ width: ' 33rem' }}>
            <div className="card-header bg-dark-subtle">
              <h4 className="">Reuse Data</h4>
            </div>
            <div className="card-body">
              <h5 className="card-title text-black m-4 fs-1 ">{reuseData}</h5>
              <Link to="/counter" className="btn btn-primary">Go Counter</Link>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default ReuseCounter
