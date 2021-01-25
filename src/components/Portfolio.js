import React, { Component } from 'react';

export default class Portfolio extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="portfolio">
                <div className="row">

                    <div className="twelve columns collapsed">
                        <h1> Check Out Some of My Projects.</h1>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" alt="">
                            {/* <ul className="portfolio"> */}
                            {
                                resumeData.portfolio && resumeData.portfolio.map((item) => {
                                    return (
                                        <ul className="portfolio>">
                                            <div className="columns portfolio-item">
                                                <div className="item-wrap">
                                                    <li>
                                                        <a href="#modal-01">
                                                            <img src={`${item.imgurl}`} className="item-img" />


                                                        </a>
                                                    </li>
                                                    <li><h4>{item.name}</h4>
                                                    </li>
                                                    <li>
                                                        <p>{item.about}</p>
                                                    </li>
                                                    <li>
                                                        <a href={item.liveDemoUrl}>
                                                            <h7>{item.liveDemo} </h7>
                                                        </a>
                                                        
                                                    </li>
                                                    <li>
                                                         <a href={item.github}>
                                                            <h7>{item.githubRepo} </h7>
                                                        </a>
                                                        
                                                    </li>

                                                    <li>
                                                        <p>{item.skillsUsed}</p>
                                                    </li>

                                                </div>
                                            </div>

                                        </ul>

                                    );
                                })
                            }


                        </div>


                    </div>
                </div>
            </section>
        );
    };
}