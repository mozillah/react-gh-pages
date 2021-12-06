export const Features=(props)=>{
    return(
        <div id="features" className="features">
      <div className="container">

      <div className="col-md-12">
                    <div className="site-heading text-center">
                        <h2><span>Fundamental Beliefs</span></h2>
                        {/* <h4>To develop and promote educational and professional testing and assessment standards</h4> */}
                    </div>
                </div>

        <div className="row" >





        {props.data
            ? props.data.map((d, a) => (
                <div className="col-lg-3 col-md-4 col-md-4 mt-4">
                        <div className="icon-box">
                          <i  className={ d.icon} style={{color: d.color}}></i>
                        <h4>{d.title}</h4>
                        </div>
                    </div>
))
: 'loading'}



{/* 

          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              <i className="ri-store-line" style={{color: "#ffbb2c"}}></i>
              <h3><a href="">Honesty</a></h3>
              
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-bar-chart-box-line" style={{color: "#5578ff"}}></i>
              <h3><a href="">Equality</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-calendar-todo-line" style={{color: "#e80368"}} ></i>
              <h3><a href="">Validity</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="ri-paint-brush-line" style={{color: "#e361ff"}} ></i>
              <h3><a href="">Reliability</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-database-2-line" style={{color: "#47aeff"}}></i>
              <h3><a href="">Commitment</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-gradienter-line" style={{color: "#ffa76e"}}></i>
              <h3><a href="">Excellence</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-file-list-3-line" style={{color: "#11dbcf"}}></i>
              <h3><a href="">Customer Focused</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-price-tag-2-line"></i>
              <h3><a href="">Accountability</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-anchor-line" ></i>
              <h3><a href="">Dirada Pack</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-disc-line" ></i>
              <h3><a href="">Moton Ideal</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-base-station-line" ></i>
              <h3><a href="">Verdo Park</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-fingerprint-line" ></i>
              <h3><a href="">Flavor Nivelanda</a></h3>
            </div>
          </div> */}


        </div>

      </div>
    </div>
    )
}