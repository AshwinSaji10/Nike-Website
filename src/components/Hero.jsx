import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";

import { shoes, statistics } from "../constants";

import { useState } from "react";

import Button from "./Button";
import ShoeCard from "./ShoeCard";

const Hero = () => {
    const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);

    return (
        <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-10">
            <div className="relative xl:w-2/5 flex flex-col pt-28 max-xl:padding-x">
                <p>Our Summer Collection</p>
                <h1
                    className="font-palanquin font-extrabold text-8xl max-sm:text-[72px]
                     max-sm:leading-[82px] xl:text-[90px] z-10"
                >
                    <span className="xl:bg-white xl:whitespace-nowrap pr-10 relative">The New Arrival</span>
                    <br />
                    <span className="text-coral-red mr-5">Nike</span>
                    Shoes
                </h1>
                <p className="font-montserrat text-slate-gray mt-5">
                    Discover stylish Nike arrivals and innovations
                </p>
                <div className="mt-5">
                <Button label="Shop now" iconURL={arrowRight}></Button>
                </div>
                <div className="flex flex-wrap w-full gap-16 mt-10">
                    {statistics.map((stat, index) => (
                        <div key={index} className="text-4xl font-palanquin">
                            <p>{stat.value}</p>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img
                    src={bigShoeImg}
                    className="w-[640] h-[480] z-10  object-contain"
                ></img>
                <div className="flex sm:gap:6 gap-4 absolute bottom-[-5%] z-20">
                    {shoes.map((image, index) => (
                        <div key={index}>
                            <ShoeCard
                                index={index}
                                imgURL={image}
                                changeBigShoeImg={(shoe) => setbigShoeImg(shoe)}
                                bigShoeImg={bigShoeImg}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
