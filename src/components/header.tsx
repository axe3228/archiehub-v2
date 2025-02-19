import Image from "next/image";
import Nav from "./nav";
import { NavProps } from "./nav";

const Header = ({activeSection}: NavProps) => {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/5 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Archie Habaradas</h1>
                    <p className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Web Developer</p>
                    <p className="mt-4 max-w-sm leading-normal text-dark-secondary-txt">
                        Bringing designs to life, one line of code at a time.</p>
                </div>
                <Nav activeSection={activeSection}/>
            </div>
            <div className="flex space-x-5 mt-8">
                <a href="https://github.com/axe3228" target="_blank"><Image src="/svg/github-mark-white.svg" alt="" width={24} height={24} /></a>
                <a href="https://www.instagram.com/nara_archie/?hl=en" target="_blank"><Image src="/svg/instagram.svg" alt="" width={24} height={24} /></a>
                <a href="https://www.linkedin.com/in/archie-habaradas/" target="_blank"><Image src="/images/linkedin-icon.png" alt="" width={24} height={24} /></a>
            </div>
        </header>
    );
}

export default Header;