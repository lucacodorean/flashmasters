const Spinner = ({text}) => {
    return (
        <div className="flex flex-col justify-center items-center h-60">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-700"></div>
            <p className={"text-center text-black mt-2 justify-center text-2xl font-semibold"}>{text}</p>
        </div>
    );
};

export default Spinner;
