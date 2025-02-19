import Hyperlink from "./hyperlink";

const Footer = () => {
    return (
        <p className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            Coded in <Hyperlink href={"https://code.visualstudio.com/"} 
            name={"Visual Studio Code"} label={"visual-studio-code"} hlColor="text-slate-400"/> by me. 
            Built with <Hyperlink href={"https://nextjs.org/"} 
            name={"Next.js"} label={"next-js"} hlColor="text-slate-400"/> and <Hyperlink 
            href={"https://tailwindcss.com/"} name={"Tailwind CSS"} label={"tailwind-CSS"} 
            hlColor="text-slate-400"/>, deployed with <Hyperlink href={"https://vercel.com/axe3228s-projects"} 
            name={"Vercel"} label={"vercel"} hlColor="text-slate-400"/>. 
            All text is set in the <Hyperlink href={"https://rsms.me/inter/"} 
            name={"Inter"} label={"inter"} hlColor="text-slate-400"/> typeface.
        </p>
    );
}
 
export default Footer;