import Image from "next/image";
import Badge from "./badge";
import { Experiences } from "@/constants/experiences";
import Hyperlink from "./hyperlink";

export type ExperienceProps = {
    id: number,
    date: string,
    jobRole: string,
    company: string,
    description: string,
    url: string,
    tags?: string[]
};

const Experience = () => {
    const ExpTemplate = ({date, jobRole, company, description, url, tags} : ExperienceProps) => (
        <a href={url} target="_blank" className="flex justify-between space-x-5 transition-all duration-100 lg:hover:bg-white/5 lg:p-5 lg:rounded-lg">
            <p className="mb-2 mt-1 text-xs font-semibold uppercase text-dark-secondary-txt 
            sm:col-span-2 whitespace-nowrap">{date}</p>
            <div className="">
                <h3 className="font-medium leading-snug text-slate-200">{jobRole}</h3>
                <p className="text-dark-secondary-txt">{company}</p>
                <p className="mt-2 text-sm leading-normal text-dark-primary-txt/75">{description}</p>
                <ul className="flex flex-wrap mt-2">
                    {tags?.map((item, i) => (
                        <li key={i} className="mb-2 mr-2"><Badge tag={item}/></li>
                    ))}
                </ul>
            </div>
        </a>
    );

    return (
        <div className="section lg:space-y-5 space-y-8" id="experience">
            {
                Experiences.sort((a, b) => b.id - a.id).map((exp: ExperienceProps, i) => (
                    <ExpTemplate
                        id={exp.id}
                        date={exp.date} 
                        jobRole={exp.jobRole}
                        company={exp.company} 
                        description={exp.description}
                        url={exp.url}
                        tags={exp.tags}
                        key={i}
                    />
                ))
            }
            <div className="flex items-center mt-8 space-x-3">
                <Image src="/images/link.png" alt="" width={24} height={24}/>
                <Hyperlink href={"https://docs.google.com/document/d/1boujWVDvDs20n-3M0_d_Gy2gscNFxuzeQt5OjL8cPr0/edit?usp=sharing"} 
                name={"View Resume"} label={"Resume"} classBlock="uppercase inline-block"/>
            </div>
        </div>
    );
}

export default Experience;