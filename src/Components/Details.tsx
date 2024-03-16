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
                
                
                
            `}
            </style>
            <div className="Details">
                <table>
                    <tbody>
                        <tr>
                            <td>
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

                            </td>
                            <td>
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
                            </td>
                        </tr>

                        <tr>
                            <td>
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

                            </td>
                            <td>
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

                            </td>

                        </tr>
                    </tbody>
                </table>
            </div >
        </>
    )
}