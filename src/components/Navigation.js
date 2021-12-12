
export const Navigation = (props) => {
    return (
        <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <h4 className="logo me-auto"><a href="index.html"><span><img src="/img/KTSlogoTransp.png" /></span></a></h4>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt=""></a>--> */}
    
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a className="nav-link active" href="#hero">Home</a></li>
              <li><a className="nav-link" href="#about">About us</a></li>
              <li className="dropdown"><a href="#"><span>Test and Services</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                <li><a href="#">(NAT™) Test </a></li>
                    <li><a href="#">(GAT™ – General)</a></li>
                    <li><a href="#">(GAT™ – Subject)</a></li>
                    <li><a href="#">(TOEFL-ITP)</a></li>
                    <li><a href="#">(TOEIC-L and R)</a></li>
                    <li><a href="#">(TOEIC-S and W)</a></li>
                  {/* <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li> */}
                  {/* <li><a href="#">Drop Down 2</a></li> */}
                  {/* <li><a href="#">Drop Down 3</a></li> */}
                  {/* <li><a href="#">Drop Down 4</a></li> */}
                </ul></li>
              <li><a a className="nav-link" href="#faq">CSR</a></li>

              {/* <li><a className="nav-link" href="#objectives">Objectives</a></li> */}
              <li><a className="nav-link" href="#features">Services</a></li>
              <li><a className="nav-link" href="#features">Procurement</a></li>
              <li><a className="nav-link" href="#faq">Downloads</a></li>
              
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    )
  }
  