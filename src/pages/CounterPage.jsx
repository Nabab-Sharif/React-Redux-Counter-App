import CounterCard from "../components/counter/CounterCard"

const CounterPage = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <CounterCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default CounterPage
