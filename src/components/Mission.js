export const Mission =(props)=>{

    return(
        <div id="mission" className="clients">
      <div className="container" >
      <div className="row">
                <div className="col-md-12">
                    <div className="site-heading text-center">
                        <h2><span>{props.data ? "Mission" : "loading..."}</span></h2>
                        <h4>{props.data ? "To develop and promote educational and professional testing and assessment standards" : "loading..."}</h4>
                    </div>
                </div>
            </div>
      </div>
    </div>
    )
}