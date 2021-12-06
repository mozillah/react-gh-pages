
export const Navigation = (props) => {
    return (
        <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto"><a href="index.html"><span>Kashmir Testing Service</span></a></h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt=""></a>--> */}
    
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              {/* <li><a className="nav-link scrollto" href="#about">About</a></li> */}
              <li><a className="nav-link scrollto" href="#objectives">Objectives</a></li>
              <li><a className="nav-link scrollto " href="#features">Features</a></li>
              <li><a className="nav-link scrollto" href="#faq">FAQ's</a></li>
              {/* <li><a href="blog.html">Blog</a></li>
              <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li> */}
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}
    
          {/* <a href="#about" className="get-started-btn scrollto">Get Started</a> */}
        </div>
      </header>
    )
  }
  