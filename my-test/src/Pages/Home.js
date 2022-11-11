import React, { Component } from "react";
import { Container } from "react-bootstrap";
import './Home.css';
import check from "../Img/check.svg";
import watch from "../Img/watch.svg";
import like from "../Img/like.svg";

export default class Home extends Component {
    render() {
        return (
            <Container>
                <div>
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
                    <div></div>
                </div>
            </Container>
        )
    }
}