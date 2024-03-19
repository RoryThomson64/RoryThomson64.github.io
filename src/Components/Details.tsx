import { ProjectButton } from "./ProjectButton";
import { ProjectDetails } from "./ProjectDetails";
import { useAppSelector } from "./Redux/Hooks";
import { SkillButton } from "./SkillButton";
import { skills } from "./SkillDetails";


export const Details = () => {


    const style = useAppSelector((state) => state.style)




    return (
        <>
            <style>
                {`
                .Details {
                    color: ${style.HeaderText.Colour};

                    margin-top: 2rem;
                    background-color: ${style.Container.Colour};
                    justify-content: center;
                    align-content: center;
                    border-radius:10%;
                    
                  
                }
                .Details p{
                    color: ${style.BodyText.Colour};
                    font-size: ${style.BodyText.Size};
                }
                table{
                    width: 100%;
                }
                td{
                    padding: 1rem;
                    #border: 1px solid black;
                    #border-collapse: collapse;
                    width: 50%;
                    vertical-align: top;

                }
                
                .skillTable{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-evenly;
                }
                .quadrant{
                    background-color: #232330;
                    border-radius:15%;
                    box-shadow: 8px 8px 20px hsl(231, 8%, 8%);
                }
                
                
                
            `}
            </style>
            <div className="Details">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div className="quadrant">
                                    <h3>
                                        Key Projects
                                    </h3>
                                    <div className="skillTable">

                                        {ProjectDetails.flatMap((project) => {
                                            return (
                                                < ProjectButton project={project} />
                                            )


                                        })}
                                    </div>
                                </div>

                            </td>
                            <td>
                                <div className="quadrant">

                                    <h3>
                                        Languages
                                    </h3>

                                    <div className="skillTable">
                                        {skills.Languages.flatMap((skill) => {
                                            return (
                                                < SkillButton skill={skill} />
                                            )


                                        })}
                                    </div>

                                    {/* <ul>
                                    {skills.Languages.flatMap((skill) => {
                                        return (

                                            < SkillButton skill={skill} />
                                        )
                                    })}
                                </ul > */}
                                </div>

                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="quadrant">

                                    <h3>
                                        Frameworks & Libraries
                                    </h3>

                                    <div className="skillTable">
                                        {skills.Frameworks_Libraries.flatMap((skill) => {
                                            return (
                                                < SkillButton skill={skill} />
                                            )


                                        })}
                                    </div>
                                </div>

                            </td>
                            <td>
                                <div className="quadrant">

                                    <h3>
                                        Tools
                                    </h3>

                                    <div className="skillTable">
                                        {skills.Tools.flatMap((skill) => {
                                            return (
                                                < SkillButton skill={skill} />
                                            )


                                        })}
                                    </div>
                                </div>

                            </td>

                        </tr>
                    </tbody>
                </table>
            </div >
        </>
    )
}