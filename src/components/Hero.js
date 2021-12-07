
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import "./Hero.css";
export const Hero = (props) => {
    return (

<Carousel id="hero">
    {props.data
            ? props.data.map((d, a) => (
              <Carousel.Item >
                <img id="carousal-img" className="d-block w-100" src={d.image} alt={"Slide "+String(a)} />
                <Carousel.Caption ><Row className="align-items-center"><Col>
                {d.title}
                {/* <h2 style={{color:"red"}}> </h2> */}
      {/* <h4 style={{color:"black"}}>{d.paragraph}</h4> */}
  </Col>
</Row>
    </Carousel.Caption>
  </Carousel.Item>
               
))
: 'loading'}




</Carousel>
      
    )
  }
  