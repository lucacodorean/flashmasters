import React from "react";

const Divider = () => {
    return (
        <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300"/>
            <span className="mx-3 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300"/>
        </div>
    );
};


export default Divider;