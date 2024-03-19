// import introImage from '../assets/steven.png'
import introImage from '../assets/Me.avif'
import { useAppSelector } from './Redux/Hooks';
export const Intro = () => {

    const style = useAppSelector((state) => state.style)
    // const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ante semper, suscipit nulla eu, venenatis purus. Vestibulum ultrices vel enim id eleifend. Aliquam vitae luctus sem. Ut et lectus gravida, luctus nibh vel, rutrum odio. Morbi varius varius diam nec egestas. Vestibulum blandit varius bibendum. Sed vestibulum ex dui, finibus tincidunt magna accumsan et. Praesent eget eleifend lorem, ut faucibus arcu. Mauris sapien ante, lacinia id commodo vel, dignissim eget erat. Vivamus finibus vestibulum placerat.\n\rMaecenas varius cursus nisl, vel feugiat ligula pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi et diam sem. Pellentesque at elementum sapien, vel rhoncus augue. Morbi nec pharetra massa. Nulla blandit consectetur libero, ac eleifend mauris ultricies vitae. Praesent eget sapien feugiat, maximus tortor vel, fermentum tellus. Quisque risus diam, lobortis vel nulla quis, efficitur mattis risus. Fusce imperdiet augue quis mattis scelerisque. Donec et libero nulla. Quisque venenatis viverra eros. Suspendisse tincidunt, tortor sit amet consequat egestas, dolor augue ultricies lorem, sit amet tincidunt justo neque a lorem."
    const summaryText = `
    Welcome! I'm an innovative software developer passionate about solving complex problems.
    With a knack for detail and a love for creativity, I thrive on pushing boundaries in technology.
    I excel in crafting elegant code, architecting robust systems, and exploring cutting-edge technologies.
    Explore my portfolio to see how we can collaborate on turning your ideas into reality.
    `;

    return (
        <>
            <style>
                {`
                .Intro {
                    color: ${style.HeaderText.Colour} ;
                    
                    background-color: ${style.Container.Colour};
                    border-radius:10%;
                }

                .IntroContent {
                    display: flex;
                    align-items: center;

                }

                .Intro h1 {
                    font-size: 2rem;
                    margin: 2rem;
                    
                }
                
                .Intro p {
                    color: ${style.BodyText.Colour};
                    font-size: ${style.BodyText.Size};
                    margin: 5rem ;
                }
                
                .Intro img{
                    border-radius: 50%;
                    border: 1px solid black;
                    margin: 5rem 5rem;
                    max-width: 15rem;

                     box-shadow: -10px -10px 50px ${style.Details.hoverCyanShadowColour},
                                 10px 10px 50px ${style.Details.hoverVioletShadowColour};


                }
                
                
            `}
            </style>
            <div className="Intro">
                <h1>
                    Who am I?
                </h1>
                <div className="IntroContent">
                    <img src={introImage} alt="My face" />
                    <p>
                        {summaryText}
                    </p>
                </div>
            </div>
        </>
    )
}