import React from 'react';

const Banner = () => {
    return (
        <div data-aos="flip-left">
            
            <div className='carousel w-full'>
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/zn4YV66/istockphoto-1435794871-612x612.jpg'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-lg">
                                    <p className="mb-5 font-bold text-2xl lg:text-3xl">Transform Your Dream Wedding into Reality with Our Expert Planning Services.</p>
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide6" className="btn border-none bg-transparent text-white">❮</a> 
                                        <a href="#slide2" className="btn border-none bg-transparent text-white">❯</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/XzqCdhH/istockphoto-1139957268-612x612.jpg)'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-lg">
                                    <p className="mb-5 font-bold text-2xl lg:text-3xl">Celebrate Life's Milestones with Joy and Enthusiasm at Our Unique Birthday Parties.</p>
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide1" className="btn hover:text-black text-white border-none bg-transparent">❮</a> 
                                        <a href="#slide3" className="btn hover:text-black text-white border-none bg-transparent">❯</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/0rV6mwX/istockphoto-1682628004-612x612.jpg)'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-lg">
                                    <p className="mb-5 font-bold text-2xl lg:3xl">Create Timeless and Enchanting Memories at Our Anniversary Celebrations.</p>
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide2" className="btn btn-circle">❮</a> 
                                        <a href="#slide4" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/0JQ07r5/istockphoto-1281543517-612x612.jpg)'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-lg">
                                    <p className="mb-5 text-2xl lg:text-3xl font-bold">Begin Your Journey to Forever with Our Spectacular Engagement Parties.</p>
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide3" className="btn bg-transparent lg:btn-circle">❮</a> 
                                        <a href="#slide5" className="btn bg-transparent lg:btn-circle">❯</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/17kLZ8G/istockphoto-1067646764-612x612.jpg)'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-lg">
                                    <p className="mb-5 font-bold text-2xl lg:text-3xl">Retire in Style with Our Unforgettable Retirement Parties.</p>
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide4" className="btn btn-circle bg-transparent">❮</a> 
                                        <a href="#slide6" className="btn btn-circle bg-transparent">❯</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/vwDhks7/istockphoto-1473464020-612x612.jpg)'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-lg">
                                    <p className="mb-5 font-bold text-2xl lg:text-3xl">Welcome the Newest Addition to Your Family with a Heartwarming Baby Shower.</p>
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide5" className="btn btn-circle bg-transparent">❮</a> 
                                        <a href="#slide1" className="btn btn-circle bg-transparent">❯</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;