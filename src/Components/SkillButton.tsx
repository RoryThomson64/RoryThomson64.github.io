import { skill } from "./SkillDetails"
export const SkillButton = ({ skill }: { skill: skill }) => {

    // style={{
    //     backgroundImage: `url(${skill.image})`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "contain",
    // }}
    return (
        <>
            <style>
                {`
            .container img{

                object-fit: contain;
                width:7.5rem;
                height:7.5rem;
                transition: opacity 300ms, filter 3000ms;
            }
            .container:hover img{
                opacity: 25%;
                filter: contrast(0.5);
                
            }
            .container{
                position:relative;
                width:7.5rem;
                height:7.5rem;
            }
            

            .container:hover .overlay{
                opacity:1;
            }
            

            .text {
                color: black;
                font-size: 16px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                -ms-transform: translate(-50%, -50%);
                font-weight: bold;
            }
            .overlay {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                height: 100%;
                width: 100%;
                opacity: 0;
                transition: .5s ease;
                

              }
            `}
            </style>
            <div className="container" >
                <img src={skill.image}></img>
                <div className="overlay">
                    <div className="text">
                        {skill.name}
                        <br></br>
                        {skill.level}
                    </div>
                </div>

            </div>
        </>
    )

}