
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, {useState} from 'react';

const useFade = () => {
    const [ fade, setFade ] = useState(false);
  
    const onMouseEnter = () => {
      setFade(true);
    };
  
    const onMouseLeave = () => {
      setFade(false);
    };
  
    const fadeStyle = !fade ? {
        opacity: 0.5, transition: '0.3s',filter: 'grayscale(100)'
        , width:"200px",
        padding:"25px"

    //   opacity: 1, transition: 'all .2s ease-in-out',
    } : {
        opacity: 1,filter: 'none'
        ,width:"200px",
        padding:"25px"
    //   opacity: .5, transition: 'all .2s ease-in-out',
    };
  
    return { fadeStyle, onMouseEnter, onMouseLeave };
  };












export const Clients =(props)=>{

    // const [hover, setHover] = useState(false);
    let [over,setOver]=React.useState(false);
    const { fadeStyle, ...fadeProps } = useFade();

  
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      
    return (
        <section id="clients" className="clients">
               <div className="section-title" >
        <h2 style={{color: "#f8981d"}} >CLIENTS</h2>
      </div>
      {/* <div className="container" > */}
        {/* <div className="clients-slider swiper"> */}
        <Carousel className="swiper-wrapper align-items-center"
        // swipeable={true}
        // draggable={true}
        // showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        centerMode={true}
        // focusOnSelect={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-50-px"
        focusOnSelect={true}
      >
        <div className="swiper-slide" 
        ><img className="img-fluid" style={{...fadeStyle}} {...fadeProps} src="img/clients/client-1.png"  alt="" /></div>
        <div className="swiper-slide" ><img  className="img-fluid" style={{...fadeStyle}} {...fadeProps} src="img/clients/client-2.png"  alt="" /></div>
        <div   className="swiper-slide" ><img  className="img-fluid" style={{...fadeStyle}} {...fadeProps} src="img/clients/client-3.png"  alt="" /></div>
        <div   className="swiper-slide" ><img  className="img-fluid" style={{...fadeStyle}} {...fadeProps} src="img/clients/client-4.png"  alt="" /></div>
        <div   className="swiper-slide" ><img  className="img-fluid" style={{...fadeStyle}} {...fadeProps} src="img/clients/client-5.png"  alt="" /></div>
        <div   className="swiper-slide" ><img  className="img-fluid" style={{...fadeStyle}} {...fadeProps} src="img/clients/client-6.png"  alt="" /></div>
        <div   className="swiper-slide" ><img  className="img-fluid" style={{...fadeStyle}} {...fadeProps} src="img/clients/client-7.png"  alt="" /></div>
        
      </Carousel>

      
    </section>
    )
}