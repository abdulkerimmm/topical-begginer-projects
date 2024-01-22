import './shape.css'

const withLoyout = (Component) => {
  const Wrapper = () => {
    return (
      <div className="general">
        <div className="left-side">
          left side
        </div>
        <div className="right-side">
          <Component  /> 
        </div>
      </div>
    )
  }

  return Wrapper

}
export default withLoyout