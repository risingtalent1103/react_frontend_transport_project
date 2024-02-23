import { useEffect, useRef, useState } from "react";
import { Menu } from "antd";
import { CloseOutlined } from '@ant-design/icons';

import clock from "/assets/icons/clock.svg";
import email from "/assets/icons/email.svg";
import phone from "/assets/icons/phone.svg";
import logo from "/assets/icons/logo.svg";
import instagramwhite from "/assets/icons/instagramwhite.svg";
import facebookwhite from "/assets/icons/facebookwhite.svg";
import twitterwhite from "/assets/icons/twitterwhite.svg";
import linkedinwhite from "/assets/icons/linkedinwhite.svg";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import IconAndText from "./IconAndText";
import NavItem from "./NavItem";
import NavItemDivider from "./NavItemDivider";
import ThemeSelect from "./Theme/ThemeSelect";

function Header() {

    const [visible, setVisible] = useState(false);

    const headerRef = useRef<HTMLDivElement>(null);



    const handleVisibleChange = (flag: boolean) => {
        setVisible(flag);
    }

    const handleScroll = () => {
        let scrollTop: number = window.scrollY;
        let divScrollTop: number = 160;
        if (headerRef.current) {
            if (divScrollTop && scrollTop < divScrollTop) {
                headerRef.current.style.position = "absolute";
                headerRef.current.style.top = "160px";
            } else {
                headerRef.current.style.position = "fixed";
                headerRef.current.style.top = "0";
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            <div className={`w-full xl:h-[160px] h-[79px] bg-primary2 flex flex-col xl:flex-row justify-center items-center`}>
                <div className="container xl:w-[1400px] sm:pl-[100px] pl-[30px]">
                    <div className="flex justify-between items-center">
                        <Link to="/">
                            <img src={logo} className="sm:w-[300px] w-[250px]" alt="logo" />
                        </Link>
                        <div className="gap-[40px] xl:flex hidden">
                            <IconAndText icon={clock} text1="Mon - Sat 9.00 - 18.00" text2="Sunday Closed" meth="0" />
                            <IconAndText icon={email} text1="Email" text2="contact@logistics.com" meth="0" />
                            <IconAndText icon={phone} text1="Call Us" text2="(00) 112 365 489" meth="0" />
                        </div>
                        <button className="mr-[40px] xl:hidden group" onClick={() => handleVisibleChange(!visible)}>
                            {visible ? <CloseOutlined style={{ color: "white", fontSize: '36px' }} /> : <img className="w-[28px] sm:w-[33px]" src="/assets/icons/Vector1.svg"></img>}
                        </button>
                    </div>
                </div>
                <div className="absolute w-full bg-[#45912540] h-[78px] top-[79px] xl:top-[160px] xl:flex hidden items-center justify-center z-10" ref={headerRef}>
                    <Container>
                        <div className="flex justify-between items-center gap-[270px]">
                            <div className="flex justify-between items-center gap-[30px]">
                                <NavLink to="/">
                                    {({ isActive }) => (
                                        <NavItem text="Home" isActive={isActive} meth="laptop" />
                                    )}
                                </NavLink>
                                <NavItemDivider />
                                <NavLink to="/aboutus">
                                    {({ isActive }) => (
                                        <NavItem text="About" isActive={isActive} meth="laptop" />
                                    )}
                                </NavLink>
                                <NavItemDivider />
                                <NavLink to="/pages">
                                    {({ isActive }) => (
                                        <NavItem text="Pages" isActive={isActive} meth="laptop" />
                                    )}
                                </NavLink>
                                <NavItemDivider />
                                <NavLink to="/project/list">
                                    {({ isActive }) => (
                                        <NavItem text="Project" isActive={isActive} meth="laptop" />
                                    )}
                                </NavLink>
                                <NavItemDivider />
                                <NavLink to="/contact">
                                    {({ isActive }) => (
                                        <NavItem text="Contact" isActive={isActive} meth="laptop" />
                                    )}
                                </NavLink>
                            </div>
                            <div className="flex justify-between items-center gap-[50px]">
                                <div className="flex justify-between gap-[30px]">
                                    <img src={instagramwhite} width="20px" height="20px" alt="instagramwhite" className="cursor-pointer hover:scale-125 transition" />
                                    <img src={facebookwhite} width="20px" height="20px" alt="facebookwhite" className="cursor-pointer hover:scale-125 transition" />
                                    <img src={twitterwhite} width="20px" height="20px" alt="twitterwhite" className="cursor-pointer hover:scale-125 transition" />
                                    <img src={linkedinwhite} width="20px" height="20px" alt="linkedinwhite" className="cursor-pointer hover:scale-125 transition" />
                                </div>
                                <div className="flex justify-center items-center bg-[white] text-[black] text-[16px] font-bold font-myKrub w-[200px] h-[78px]">
                                    Request Quote
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="w-full xl:hidden bg-primary2 flex flex-row justify-center" >
                <div className="container py-5 flex flex-wrap-reverse mx-auto gap-2" style={{ display: visible ? "flex" : "none" }}>
                    <IconAndText className="ml-[10px]" icon={clock} text1="Mon - Sat 9.00 - 18.00" text2="Sunday Closed" meth="0" />
                    <IconAndText className="ml-[10px]" icon={email} text1="Email" text2="contact@logistics.com" meth="0" />
                    <IconAndText className="ml-[10px]" icon={phone} text1="Call Us" text2="(00) 112 365 489" meth="0" />
                </div>
            </div>
            <div className="absolute w-full xl:hidden block bg-primary3 z-10" >
                <div className="xl:hidden">
                    <div className="flex flex-col justify-center gap-[30px] pt-10 pb-[425px]" style={{ display: visible ? "block" : "none" }}>
                        <NavLink to="/">
                            {({ isActive }) => (
                                <NavItem className="ml-5" text="Home" isActive={isActive} meth="mobile" />
                            )}
                        </NavLink>
                        <NavLink to="/aboutus">
                            {({ isActive }) => (
                                <NavItem className="ml-5 pl-10" text="About" isActive={isActive} meth="mobile" />
                            )}
                        </NavLink>
                        <NavLink to="/pages">
                            {({ isActive }) => (
                                <NavItem className="ml-5 pl-10" text="Pages" isActive={isActive} meth="mobile" />
                            )}
                        </NavLink>
                        <NavLink to="/project/list">
                            {({ isActive }) => (
                                <NavItem className="ml-5 pl-10" text="Project" isActive={isActive} meth="mobile" />
                            )}
                        </NavLink>
                        <NavLink to="/contact">
                            {({ isActive }) => (
                                <NavItem className="ml-5 pl-10" text="Contact" isActive={isActive} meth="mobile" />
                            )}
                        </NavLink>
                    </div>
                    <div className="flex flex-col justify-between items-center gap-[50px]" style={{ display: visible ? "block" : "none" }}>
                        <div className="mx-auto mb-[55px] flex justify-center items-center bg-[white] text-[black] text-[16px] font-bold font-[p] w-[216px] h-[78px] cursor-pointer">
                            Request Quote
                        </div>
                        <div className="w-[160px] flex justify-between gap-[30px] mx-auto mb-[42px]">
                            <img src={instagramwhite} width="20px" height="20px" alt="instagramwhite" className="cursor-pointer hover:scale-125 transition" />
                            <img src={facebookwhite} width="20px" height="20px" alt="facebookwhite" className="cursor-pointer hover:scale-125 transition" />
                            <img src={twitterwhite} width="20px" height="20px" alt="twitterwhite" className="cursor-pointer hover:scale-125 transition" />
                            <img src={linkedinwhite} width="20px" height="20px" alt="linkedinwhite" className="cursor-pointer hover:scale-125 transition" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed top-[850px] right-[10px] z-20">
                <ThemeSelect/>
            </div>
        </>
    )
}
export default Header;