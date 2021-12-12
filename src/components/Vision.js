export const Vision =(props)=>{

    return(
        <div id="vision" className="clients">
      <div className="container" >
      <div className="section-title" >
        <h2 style={{color: "#f8981d"}} >Vision</h2>
      </div>
      <div className="row">
                <div className="col-md-12">
                    <div className=" text-center">
                        {/* <h2><span>{props.data ? "Vision" : "loading..."}</span></h2> */}
                        <h4>{props.data ? props.data.paragraph : "loading..."}</h4>
                    </div>
                </div>
            </div>
      </div>
    </div>
    )
}