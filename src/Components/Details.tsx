import { SkillButton } from "./SkillButton";
import { skills } from "./SkillDetails";


export const Details = () => {






    return (
        <>
            <style>
                {`
                .Details {
                    color: red;
                    margin-top: 2rem;
                    background-color: #f5f5f5;
                    justify-content: center;
                    align-content: center;
                    
                  
                }
                table{
                    width: 100%;
                }
                td{
                    padding: 1rem;
                    #border: 1px solid black;
                    #border-collapse: collapse;
                    width: 50%;
                }
                
                .skillTable{
                    display: flex;
                    flex-wrap: wrap;
                }
                
                
                
            `}
            </style>
            <div className="Details">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h3>
                                    Work Experience
                                </h3>
                                <p>
                                    isim
                                </p>
                            </td>
                            <td>
                                <h3>
                                    Languages
                                </h3>
                                <table>
                                    <tbody>
                                        <tr className="skillTable">
                                            {skills.Languages.flatMap((skill) => {
                                                return (
                                                    < SkillButton skill={skill} />
                                                )


                                            })}
                                        </tr>
                                    </tbody>
                                </table>
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
                                <table>
                                    <tbody>
                                        <tr className="skillTable">
                                            {skills.Frameworks_Libraries.flatMap((skill) => {
                                                return (
                                                    < SkillButton skill={skill} />
                                                )


                                            })}
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td>
                                <h3>
                                    Tools
                                </h3>
                                <table>
                                    <tbody>
                                        <tr className="skillTable">
                                            {skills.Tools.flatMap((skill) => {
                                                return (
                                                    < SkillButton skill={skill} />
                                                )


                                            })}
                                        </tr>
                                    </tbody>
                                </table>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div >
        </>
    )
}