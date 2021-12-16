
import './index.css'

const Footer = () => {
  return (
    <div>
      <h1 className="logo">
        COVID19<span className="india">INDIA</span>
        
      </h1>
      <p className="tagline">
        we stand with everyone fighting on the front lines
      </p>
      <div className="icon-container">
        <img src="https://res.cloudinary.com/dvcurljig/image/upload/v1639544356/Covid19DashBoard/Vector_m9cjwh.svg" alt="github" className="icon" />
        <img src="https://res.cloudinary.com/dvcurljig/image/upload/v1639544354/Covid19DashBoard/instagram_t2kkzj.svg" alt="insta" className="icon" />
        <img src="https://res.cloudinary.com/dvcurljig/image/upload/v1639544352/Covid19DashBoard/path3611_tobkyk.svg" alt="twitter" className="icon" />
      </div>
    </div>
  )
}

export default Footer