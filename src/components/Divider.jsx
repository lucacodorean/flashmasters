import "react";

const Divider = ({text}) => {
    return (
        <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300"/>
            {text ? <span className="mx-3 text-gray-400">{text}</span> : null}
            <hr className="flex-grow border-gray-300"/>
        </div>
    );
};


export default Divider;