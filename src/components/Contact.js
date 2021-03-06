export const Contact =(props)=>{
return(
    <section id="contact" className="contact">
      <div className="container" >

        {/* <div className="col-md-12"> */}
        <div className="section-title" >
        <h2 style={{color: "#f8981d"}} >CONTACT</h2>
      </div>
                {/* </div> */}
        <div className="row" >

          <div className="col-lg-6">

            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>{props.data ? props.data.address : 'loading'}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p>{props.data ? props.data.email1 : 'loading'}</p>
                  <p>{props.data ? props.data.email2 : 'loading'}</p>

                  {/* <p>info@example.com<br />contact@example.com</p> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>{props.data ? props.data.phone1 : 'loading'}</p>
                  <p>{props.data ? props.data.phone2 : 'loading'}</p>
                  {/* <p>+1 5589 55488 55<br/>+1 6678 254445 41</p> */}
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
)
}