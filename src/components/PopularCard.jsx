const PopularCard = ({imgURL, name, price}) => {
    return (
        <div>
            <img src={imgURL} alt={name} className="w-[280px] h-[280px]"></img>

            <h3>{price}</h3>
        </div>
    );
};

export default PopularCard;
