import { Project } from "./ProjectDetails"
import { useAppSelector } from "./Redux/Hooks"


export const ProjectButton = ({ project }: { project: Project }) => {
    const style = useAppSelector((state) => {
        return state.style.Details
    })
    return (
        <>
            <style>
                {`
            .projectContainer img{
                object-fit: contain;
                #width:16rem;
                height:11.25rem;
                transition: opacity 300ms, filter 3000ms;
                border-radius:20%;

            }
            .projectContainer:hover img{
                opacity: 25%;
                filter: contrast(0.5);
                
            }
            .projectContainer{
                margin:0.5rem;
                position:relative;
                #width:17rem;
                height:11.25rem;
                margin: 0.5rem;
                box-shadow: 10px 10px 10px ${style.shadowColour};
                border-radius:20%;
                
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