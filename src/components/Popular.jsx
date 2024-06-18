import { products } from "../constants";

import PopularCard from "../components/PopularCard";
import React from "react";

const Popular = () => {
    return (
        <section>
            <div className="flex flex-col">
                <h2 className="text-4xl font-palanquin font-extrabold">
                    <span className="text-coral-red mr-3">Popular</span>
                    products
                </h2>
                <p className="font-montserrat text-slate-gray mt-5">
                    Experience our popular products
                </p>
            </div>
            <div className="mt-16 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-6 max-xl:padding-x ">
                {products.map((product) => (
                    <PopularCard key={product.name} {...product} />
                ))}
            </div>
        </section>
    );
};

export default Popular;
