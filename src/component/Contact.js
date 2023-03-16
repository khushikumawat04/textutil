import React from 'react'

const Contact = (props) => {
  return (
    // style={{color: props.ctheme==='light'? "black":"white"}}
     <div className='container' style={{color: props.ctheme==='light'? "black":"white"}}>
       
<section className="mb-4">

    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    
    <p className="text-center w-responsive mx-auto mb-5 w-50">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row">

        {/* <!--Grid column--> */}
        <div className="col-md-9 mb-md-0 mb-5 mx-auto">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                {/* <!--Grid row--> */}
                <div className="row">

                    {/* <!--Grid column--> */}
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                        <label htmlFor="name" className="">Your name</label>
                            <input type="text" id="name" name="name" className="form-control"/>
                            
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                        <label htmlFor="email" class="">Your email</label>
                            <input type="text" id="email" name="email" className="form-control"/>
                           
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0 mt-3">
                        <label htmlFor="subject" className="">Subject</label>
                            <input type="text" id="subject" name="subject" className="form-control"/>
                            
                        </div>
                    </div>
                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div className="row">

                    {/* <!--Grid column--> */}
                    <div className="col-md-12 mt-3">

                        <div className="md-form">
                      
                        
                        
                        <label htmlFor="message">Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                           
                        </div>

                    </div>
                </div>
              

            </form>

            <div className="text-center text-md-left">
                <a href='/' className="btn btn-primary mt-3 px-5" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div className="status"></div>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        {/* <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@mdbootstrap.com</p>
                </li>
            </ul>
        </div> */}
        {/* <!--Grid column--> */}

    </div>

</section>

      
    </div>
  )
}

export default Contact


