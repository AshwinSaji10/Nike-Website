import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";

import { statistics } from "../constants";

import Button from "./Button";

const Hero = () => {
    
    return (
        <section id="home" className="w-full flex xl:flex-row flex-col">
            <div className="relative xl:w-2/5 flex flex-col">
                <p>Our Summer Collection</p>
                <h1
                    className="font-palanquin font-extrabold text-8xl max-sm:text-[72px]
                     max-sm:leading-[82px]"
                >
                    <span>The New Arrival</span>
                    <br />
                    <span className="text-coral-red mr-5">Nike</span>
                    Shoes
                </h1>
                <p className="font-montserrat">Discover stylish Nike arrivals and innovations</p>
                <Button label="Shop now" iconURL={arrowRight}></Button>
                <div className="flex flex-wrap w-full gap-16">
                    {statistics.map((stat, index) => (
                        <div className="text-4xl font-palanquin">
                            <p>{stat.value}</p>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex justify-center items-center ">
                <img src={bigShoe1} className="w-[640] h-[480] z-10"></img>
            </div>
        </section>
    );
};

export default Hero;
