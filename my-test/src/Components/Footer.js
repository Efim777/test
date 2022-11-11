import React, { Component } from "react";
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p>The operator of this website is NOT a lender or a broker, does not make offers for loans and does not charge you for any service or products.
                     This site allows you to submit your information to our network of lenders to determine if they maybe be able to offer you a personal loan ranging from $100 up to $1,500.
                      The actual amounts, terms, and APR a customer could qualify for will vary based on credit scores, individual lender requirements, and state laws. Not all lenders can provide up to $1,500.
                       Services are not available in all states. Credit checks may be obtained by some lenders. By using our content and services, you agree to our <a href="#">Terms of Website Use</a>, <a href="#">Privacy Policy</a>, and <a href="#">Disclaimer</a>.</p>
                <p>© 2020 NoName.com. All rights reserved.</p>
            </div>
        )
    }
}