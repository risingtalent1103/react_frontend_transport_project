import { useState } from "react";
import { changeTheme } from "./helper";


function ThemeSelect() {
    const [btnState, setBtnState] = useState(1);
    const onButtonClick = (value:number) => {
        if(value === 3)changeTheme("default");
        if(value === 2)changeTheme("theme1");
        if(value === 1)changeTheme("theme2");
        setBtnState(value);
    }
    return (
        <>
            <div className={`relative w-[150px] h-[40px] flex flex-row items-center px-[2px] rounded-[30px] shadow-[inset_1px_1px_5px_1px_rgba(3,3,9,0.7)]`}
                             style={{backgroundColor: btnState === 1 ? '#C1E2BE': btnState === 2 ? '#517143': '#4D8137'}}>
                 {
                    btnState === 1 ? <div className="absolute left-[5px] w-[32px] h-[32px] rounded-[50%] duration-300 ease-in-out delay-50 cursor-pointer  bg-secondary1 shadow-[1px_1px_5px_2px_rgba(93,126,90,0.4)]"  onClick={() => onButtonClick(1)}/>
                    : <div className="absolute left-[5px] w-[32px] h-[32px] rounded-[50%] duration-300 ease-in-out delay-50 cursor-pointer bg-[#C1E2BE] opacity-0 hover:opacity-100"  onClick={() => onButtonClick(1)}/>
                 }
                 {
                    btnState === 2 ? <div className="absolute left-[40%] w-[32px] h-[32px] rounded-[50%] duration-300 ease-in-out delay-50 cursor-pointer  bg-secondary1 shadow-[1px_1px_5px_2px_rgba(93,126,90,0.4)]"  onClick={() => onButtonClick(2)}/>
                    : <div className="absolute left-[40%] w-[32px] h-[32px] rounded-[50%] duration-300 ease-in-out delay-50 cursor-pointer bg-[#517143] opacity-0 hover:opacity-100"  onClick={() => onButtonClick(2)}/>
                 }
                 {
                    btnState === 3 ? <div className="absolute right-[5px] w-[32px] h-[32px] rounded-[50%] duration-300 ease-in-out delay-50 cursor-pointer  bg-secondary1 shadow-[1px_1px_5px_2px_rgba(93,126,90,0.4)]"  onClick={() => onButtonClick(3)}/>
                    : <div className="absolute right-[5px] w-[32px] h-[32px] rounded-[50%] duration-300 ease-in-out delay-50 cursor-pointer bg-primary2 opacity-0 hover:opacity-100"  onClick={() => onButtonClick(3)}/>
                 }
                
            </div>
        </>
        
    )
}
export default ThemeSelect;
