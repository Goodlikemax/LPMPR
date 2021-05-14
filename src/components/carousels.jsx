import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Guarantee from './guarantee'

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MaximizeIcon from "@material-ui/icons/Maximize";
class Carousels extends Component {
    state = {
        activeSilde: 0
    };

    handleSlideSelect = () => {};

    render() {
        const responsive = {
            desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
            tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 }
        };

        const CustomDot = ({ onMove, index, onClick, active }) => {
            return (
                <li
                    className={active ? "active" : "inactive"}
                    onClick={() => onClick()}
                >
                    <MaximizeIcon />
                </li>
            );
        };

        const arrowStyle = {
            background: "transparent",
            border: 0,
            color: "#ffe600",
            fontSize: "80px"
        };
        const CustomRight = ({ onClick }) => (
            <button className="arrow right" onClick={onClick} style={arrowStyle}>
                <ArrowForwardIcon style={{ fontSize: "50px" }} />
            </button>
        );
        const CustomLeft = ({ onClick }) => (
            <button className="arrow left" onClick={onClick} style={arrowStyle}>
                <ArrowBackIcon style={{ fontSize: "50px" }} />
            </button>
        );
        //Also please improve the dot problem
        // Here we used number to just know click event buthelp us with ui too

        return (
            // <!-- Main Carousel Section Start -->
            <div id="main-slide" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <Carousel
                        responsive={responsive}
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={true}
                        className=""
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}

                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                        customDot={<CustomDot />}
                        customRightArrow={<CustomRight />}
                        customLeftArrow={<CustomLeft />}
                    >
                        <div className="carousel-item active">
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1587382559340-818aa5fc7a43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                alt="Second slide"
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Слайд первый</h1>
                                <p>тут интересная подпись</p>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1587382559340-818aa5fc7a43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                alt="Second slide"
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Слайд второй</h1>
                                <p>_________________</p>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1587382559340-818aa5fc7a43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                alt="Second slide"
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Слайд третий</h1>
                                <p>_________________</p>
                            </div>
                        </div>
                        {/*<div className="carousel-item active">*/}
                        {/*    <div className='container'>*/}
                        {/*        <div className='text-center'>*/}
                        {/*            <h2>Доставка</h2>*/}
                        {/*            <img src='img/np-showcase-2.png' alt=''/>*/}
                        {/*        </div>*/}
                        {/*        <div className='text-center'>*/}
                        {/*            MoPar.com.ua відправляє товар по всіх регіонах України транспортною компанією "Нова пошта". Відправлення здійснюється Новою Поштою день у день, якщо замовлення зроблене до 15:00 з понеділка по п'ятницю та до 12:00 у суботу. Якщо замовлення зроблене після зазначеного часу, відправлення здійснюється наступного робочого дн*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </Carousel>
                </div>
            </div>
            /* <!-- Main Carousel Section End --> */
        );
    }
}

export default Carousels;
