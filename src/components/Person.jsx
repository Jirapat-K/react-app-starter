import React from "react";

export default function Person ({name, address}) {

    return (
        <div className="text-amber-600">
            <h1>
                My name is{" "}
                <span className="text-teal-400">
                    {name}!</span>
                <p>{address}</p>
            </h1>
        </div>
    );
}
