import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import { Dropdown, ButtonGroup } from "react-bootstrap";

export class Footer extends Component {

  render() {
    return (
        <footer className="bg_gray">
            <div className="footer_top small_pt pb_20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="widget">
                                <div className="footer_logo">
                                    <a href="#"><img src="{{asset('assets/images/logo_dark.png')}}" alt="logo"/></a>
                                </div>
                                <p className="mb-3">If you are going to use of Lorem Ipsum need to be sure there isn't anything hidden of text</p>
                                <ul className="contact_info">
                                    <li>
                                        <i className="ti-location-pin"></i>
                                        <p>123 Street, Old Trafford, NewYork, USA</p>
                                    </li>
                                    <li>
                                        <i className="ti-email"></i>
                                        <a href="mailto:info@sitename.com">info@sitename.com</a>
                                    </li>
                                    <li>
                                        <i className="ti-mobile"></i>
                                        <p>+ 457 789 789 65</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="widget">
                                <h6 className="widget_title">Useful Links</h6>
                                <ul className="widget_links">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Location</a></li>
                                    <li><a href="#">Affiliates</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="widget">
                                <h6 className="widget_title">My Account</h6>
                                <ul className="widget_links">
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Discount</a></li>
                                    <li><a href="#">Returns</a></li>
                                    <li><a href="#">Orders History</a></li>
                                    <li><a href="#">Order Tracking</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="widget">
                                <h6 className="widget_title">Instagram</h6>
                                <ul className="widget_instafeed instafeed_col4">
                                    <li><a href="#"><img src="" alt="banner-3.jpg" /><span className="insta_icon"><i className="ti-instagram"></i></span></a></li>
                                    <li><a href="#"><img src="" alt="banner2.jpg" /><span className="insta_icon"><i className="ti-instagram"></i></span></a></li>
                                    <li><a href="#"><img src="" alt="kunci-sock.jpg" /><span className="insta_icon"><i className="ti-instagram"></i></span></a></li>
                                    <li><a href="#"><img src="" alt="JIMMY_GAYA_MIDLE_BANNER.jpg" /><span className="insta_icon"><i className="ti-instagram"></i></span></a></li>
                                    <li><a href="#"><img src="" alt="banner-bottom.jpg" /><span className="insta_icon"><i className="ti-instagram"></i></span></a></li>
                                    <li><a href="#"><img src="" alt="1.png" /><span className="insta_icon"><i className="ti-instagram"></i></span></a></li>
                                    <li><a href="#"><img src="" alt="2.png" /><span className="insta_icon"><i className="ti-instagram"></i></span></a></li>
                                    <li><a href="#"><img src="" alt="3.png" /><span className="insta_icon"><i className="ti-instagram"></i></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="middle_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="shopping_info">
                                <div className="row justify-content-center">
                                    <div className="col-md-4">	
                                        <div className="icon_box icon_box_style2">
                                            <div className="icon">
                                                <i className="flaticon-shipped"></i>
                                            </div>
                                            <div className="icon_box_content">
                                                <h5>Free Delivery</h5>
                                                <p>Phasellus blandit massa enim elit of passage varius nunc.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">	
                                        <div className="icon_box icon_box_style2">
                                            <div className="icon">
                                                <i className="flaticon-money-back"></i>
                                            </div>
                                            <div className="icon_box_content">
                                                <h5>30 Day Returns Guarantee</h5>
                                                <p>Phasellus blandit massa enim elit of passage varius nunc.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">	
                                        <div className="icon_box icon_box_style2">
                                            <div className="icon">
                                                <i className="flaticon-support"></i>
                                            </div>
                                            <div className="icon_box_content">
                                                <h5>27/4 Online Support</h5>
                                                <p>Phasellus blandit massa enim elit of passage varius nunc.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_footer border-top-tran">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <p className="mb-lg-0 text-center">© 2020 All Rights Reserved by Bestwebcreator</p>
                        </div>
                        <div className="col-lg-4 order-lg-first">
                            <div className="widget mb-lg-0">
                                <ul className="social_icons text-center text-lg-left">
                                    <li><a href="#" className="sc_facebook"><i className="ion-social-facebook"></i></a></li>
                                    <li><a href="#" className="sc_twitter"><i className="ion-social-twitter"></i></a></li>
                                    <li><a href="#" className="sc_google"><i className="ion-social-googleplus"></i></a></li>
                                    <li><a href="#" className="sc_youtube"><i className="ion-social-youtube-outline"></i></a></li>
                                    <li><a href="#" className="sc_instagram"><i className="ion-social-instagram-outline"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <ul className="footer_payment text-center text-lg-right">
                                <li><a href="#"><img src="" alt="visa" /></a></li>
                                <li><a href="#"><img src="" alt="discover" /></a></li>
                                <li><a href="#"><img src="" alt="master_card" /></a></li>
                                <li><a href="#"><img src="" alt="paypal" /></a></li>
                                <li><a href="#"><img src="" alt="amarican_express" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
  }

}

export default withRouter(Footer);
