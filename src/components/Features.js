export const Features=(props)=>{
    return(
        <div id="features" className="features">
          <div className="section-title" >
        <h2 style={{color: "#f8981d"}} >Fundamental Beliefs</h2>
      </div>
      <div className="container">

      {/* <div className="col-md-12"> */}
                    
                {/* </div> */}

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




        </div>

      </div>
    </div>
    )
}