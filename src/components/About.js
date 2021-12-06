export const About = (props) => {
    return(
        <section id="about" className="about section-bg">
        <div className="container" 
        // data-aos="fade-up"
        >
  
          <div className="row no-gutters">
            <div className="content col-xl-5 d-flex align-items-stretch">
              <div className="content">
                <h3>Fundamental Beliefs</h3>

                {/* <h1>{props.data ? props.data.title : 'Loading'}</h1> */}
                {/* <h2>{props.data ? props.data.paragraph : 'Loading'}</h2> */}
                <p>
                {props.data ? props.data.Mission : 'Loading'}
                </p>
                {/* <a href="#" className="about-btn"><span>About us</span> <i className="bx bx-chevron-right"></i></a> */}
              </div>
            </div>
            <div className="col-xl-7 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-md-3 icon-box" 
                //   data-aos="fade-up" data-aos-delay="100" 
                  >
                    <i className="bx bx-receipt"></i>
                    <h4>Continuous improvement </h4>
                    {/* <p>Creating an environment of honesty also encourages self-accountability and responsibility</p> */}
                  </div>
                  <div className="col-md-3 icon-box"
                //    data-aos="fade-up" data-aos-delay="200"
                   >
                    <i className="bx bx-cube-alt"></i>
                    <h4>Equality</h4>
                    <p>KTS aims to provide equal employment opportunities in the recruitment and selection process 
of human resources.</p>
                  </div>
                  <div className="col-md-6 icon-box" 
                //   data-aos="fade-up" data-aos-delay="300"
                  >
                    <i className="bx bx-images"></i>
                    <h4>High performance</h4>
                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                  </div>
                  <div className="col-md-6 icon-box" 
                //   data-aos="fade-up" data-aos-delay="400"
                  >
                    <i className="bx bx-shield"></i>
                    <h4>Beatae veritatis</h4>
                    <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </section>
    )

}