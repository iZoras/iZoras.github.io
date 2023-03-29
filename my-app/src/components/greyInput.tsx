import React, { useState } from "react";
import glass from "../img/magn_glass_for_btn.png";
import  "../styles/grey_input-style/gray-input-style.css"

interface GreyInputFunctions {
    submitHandler?: () => void;
    changeHandler?: () => void;
}

const GreyInput: React.FC<GreyInputFunctions> = () => {
    const [value, setValue] = useState("");

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        setValue("");
    };

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <form
            className="input-container flex align-middle rounded-full bg-slate-300 my-auto"
            onSubmit={submitHandler}
        >
            <input
                placeholder="Поиск..."
                className="  outline-0 bg-transparent"
                type="text"
                value={value}
                onChange={changeHandler}
            />
            <div className="search-input rounded-full bg-orange-400 flex align-middle justify-center m-auto">
                <img src={glass} alt="glass" />
            </div>
        </form>
    );
};

export default GreyInput;
