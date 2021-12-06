import "./Objectives.css"
export const Objectives =(props)=>{


    return(
        <section id ="objectives" className="we-offer-area text-center bg-gray ">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="site-heading text-center">
                        <h2><span>Objectives</span></h2>
                    </div>
                </div>
            </div>

                <div className="row our-offer-items less-carousel">

          {props.data
            ? props.data.map((d, i) => (
                <div className="col-md-6 col-sm-6 equal-height">
                        <div className="item">
                        <h4>{d.title}</h4>
                        <p>
                           {d.paragraph}
                            </p>
                        </div>
                    </div>
))
: 'loading'}








        </div>
        </div>
    </section>
    )
}