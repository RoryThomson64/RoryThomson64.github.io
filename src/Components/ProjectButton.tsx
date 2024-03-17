import { Project } from "./ProjectDetails"


export const ProjectButton = ({ project }: { project: Project }) => {

    return (
        <>
            <style>
                {`
            .projectContainer img{
                object-fit: contain;
                width:16rem;
                height:11.25rem;
                border-radius:20%;
                transition: opacity 300ms, filter 3000ms;
            }
            .projectContainer:hover img{
                opacity: 25%;
                filter: contrast(0.5);
                
            }
            .projectContainer{
                position:relative;
                width:17rem;
                height:11.25rem;
                margin: 0.5rem;
                
            }
            

            .projectContainer:hover .overlay{
                opacity:1;
            }
            

            
            `}
            </style>
            <a href={project.link}>
                <div className="projectContainer">
                    <img src={project.image}></img>
                    <div className="overlay">
                        <div className="text">
                            {project.name}
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}