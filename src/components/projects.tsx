import Badge from "./badge";
import Image from "next/image";
import { ProjectsList } from "@/constants/projects";

export type ProjectProps = {
    id: number,
    image?: string,
    name: string,
    description: string,
    href: string,
    tags?: string[],
};

const Projects = () => {

    const Project = ({image, name, description, href, tags} : ProjectProps) => (
        <a href={href} target="_blank">
            <div className="flex flex-col justify-center items-center lg:p-5">
                <Image src={image ?? ''} alt="" layout="responsive" width={100} height={50}/>
                <div className="mt-5">
                    <h3 className="font-medium leading-snug text-dark-primary-txt">{name}</h3>
                    <p className="mt-2 text-sm leading-normal text-dark-primary-txt/75">{description}</p>
                    <ul className="flex flex-wrap mt-2">
                        {tags?.map((item, i) => (
                            <li key={i} className="mb-2 mr-2"><Badge tag={item}/></li>
                        ))}
                    </ul>
                </div>
            </div>
        </a>
    );

    return (
        <div className="section space-y-10" id="projects">
            {
                ProjectsList.sort((a, b) => b.id - a.id).map((project: ProjectProps, i) => (
                    <Project
                        id={project.id}
                        image={project.image}
                        name={project.name}
                        description={project.description}
                        href={project.href}
                        tags={project.tags}
                        key={i}
                    />
                ))
            }
        </div>
    );
}

export default Projects;