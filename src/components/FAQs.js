import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

export const FAQs =(props)=>{

   return(


    <section id="faq" className="faq " style={{backgroundColor: "#1b1b1b"}}>
    <div className="container" >

      <div className="section-title" >
        <h2 style={{color: "#f8981d"}} >Frequently Asked Questions</h2>
      </div>
      
<Accordion >



{props.data
            ? props.data.map((d, i) => (
              <Accordion.Item eventKey={String(i)}>
                <Accordion.Header>{d.question}</Accordion.Header>
                <Accordion.Body>
                    {d.answer}
    </Accordion.Body>
  </Accordion.Item>

                
))
: 'loading'}

</Accordion> 
</div>
      </section>
  );
}
