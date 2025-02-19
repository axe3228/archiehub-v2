import Badge from "./badge";
import Image from "next/image";

const Projects = () => {

    type ProjectProps = {
        image: string,
        name: string,
        acronym?: string,
        description: string,
        tags?: string[]
    };

    const Project = ({image, name, acronym, description, tags} : ProjectProps) => (
        <div className="flex items-start justify-between space-x-5 lg:p-5">
            <Image src={image} alt="" width={100} height={50}/>
            <div className="">
                <h3 className="font-medium leading-snug text-slate-200">{name}</h3>
                <p className="text-slate-500">{acronym}</p>
                <p className="mt-2 text-sm leading-normal">{description}</p>
                <ul className="flex flex-wrap mt-2">
                    {tags?.map((item, i) => (
                        <li key={i} className="mb-2 mr-2"><Badge tag={item}/></li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return (
        <div className="section space-y-10" id="projects">
            <Project 
                image={'/images/image-placeholder.jpg'}
                name={'Payroll Management System'}
                acronym={'PMS'}
                description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, tempora? At, 
                recusandae quam! Architecto reiciendis nesciunt molestias quod dolores tenetur 
                explicabo minus quasi aspernatur officia exercitationem, harum enim ipsam delectus.`}
                tags={['VB.Net', 'MySQL']} 
                />
            <Project 
                image={'/images/image-placeholder.jpg'}
                name={'Data Management System'}
                acronym={'DMS'}
                description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, tempora? At, 
                recusandae quam! Architecto reiciendis nesciunt molestias quod dolores tenetur 
                explicabo minus quasi aspernatur officia exercitationem, harum enim ipsam delectus.`}
                tags={['VB.Net', 'MySQL']} 
                />
            <Project 
                image={'/images/image-placeholder.jpg'}
                name={'Feedback System'}
                description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, tempora? At, 
                recusandae quam! Architecto reiciendis nesciunt molestias quod dolores tenetur 
                explicabo minus quasi aspernatur officia exercitationem, harum enim ipsam delectus.`}
                tags={['Android Studio', 'Java', 'SQLite']} 
                />
        </div>
    );
}
 
export default Projects;