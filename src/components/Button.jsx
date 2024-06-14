const Button = ({ label, iconURL }) => {
    return (
        <button
            className="flex justify-center font-montserrat gap-2 border 
        px-7 py-4 rounded-full text-white bg-coral-red leading-none items-center
        w-[200px]"
        >
            {label}

            <img src={iconURL} className="w-5 h-5 ml-2 rounded-full"></img>
        </button>
    );
};

export default Button;
