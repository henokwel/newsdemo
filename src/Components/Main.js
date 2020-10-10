import React, { useEffect, useState } from 'react'
import Card from './Card';
import '../Assets/Styles/Main.css'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';


import Parser from 'rss-parser'
let parser = new Parser();

export default function Main() {
    const [newsContainer, setNews] = useState([])
    // fetch news
    useEffect(() => {
        const fetch = async () => {
            let feed = await parser.parseURL('https://rss.aftonbladet.se/rss2/small/pages/sections/kultur/');
            setNews(feed.items)
        }
        fetch()
    }, [])

    return (
        <div className="main_Container">
            {newsContainer !== undefined ?
                <CarouselProvider
                    naturalSlideWidth={500}
                    naturalSlideHeight={325}
                    step={2}
                    totalSlides={newsContainer.length}
                    className="animateSlide"
                >
                    <Slider>
                        {newsContainer.map((article, index) =>
                            <Slide index={index} key={index}>
                                <Card article={article} />
                            </Slide>
                        )}
                    </Slider>

                    <div className="slide_Btn">
                        <ButtonBack>
                            <i className="fas fa-arrow-alt-circle-left"></i>
                        </ButtonBack>
                        <ButtonNext>
                            <i className="fas fa-arrow-alt-circle-right"></i>
                        </ButtonNext>
                    </div>

                </CarouselProvider>
                : "Loading"}


        </div>
    )
}
