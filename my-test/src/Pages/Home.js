import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import './Home.css';
import check from "../Img/check.svg";
import watch from "../Img/watch.svg";
import like from "../Img/like.svg";

export default class Home extends Component {
    render() {
        return (
            <Container>
                <div className="d-flex justify-content-between wrapper">
                    <div>
                        <div className="baner">
                            <h1 className="header-title">Time is money,<br/> don’t waste it</h1>
                            <div className="d-flex subtitle">
                                <div>
                                    <img src={check} height="24" width="24" />
                                    <p>$200—$10K Personal Loans</p>
                                </div>
                                <div>
                                    <img src={check} height="24" width="24" />
                                    <p>Fast, Easy and Discreet</p>
                                </div>
                            </div>

                        </div>
                        <div className="d-flex blocks">
                            <div className="text-block">
                                <img src={watch} height="48" width="48" />
                                <p className="title">Money as soon as next business day</p>
                                <p>With funds in your account as soon as the next business day*, you can get moving on your big plans</p>
                            </div>

                            <div className="text-block">
                                <img src={like} height="48" width="48" />
                                <p className="title">We consider all types of credit history</p>
                                <p>Just because your credit score may be "not-so-great" doesn't mean you can't get approved.</p>
                            </div>
                        </div>
                    </div>
                    <div className="checkout">
                        <div className="checkout-title">
                            <h2>Checkout faster</h2>
                            <p>Our pre-filled form lets you request a loan faster, so you can get on with your day.</p>
                        </div>
                        <div className="start-email">
                            <span>Start here</span>
                            <input className="form-control input-email" type="email" placeholder="Email Address"></input>
                        </div>
                        <Button variant="primary" className="btn-started">Get Started</Button>
                    </div>
                </div>
            </Container>
        )
    }
}