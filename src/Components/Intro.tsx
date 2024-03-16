import introImage from '../assets/steven.png'
export const Intro = () => {

    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ante semper, suscipit nulla eu, venenatis purus. Vestibulum ultrices vel enim id eleifend. Aliquam vitae luctus sem. Ut et lectus gravida, luctus nibh vel, rutrum odio. Morbi varius varius diam nec egestas. Vestibulum blandit varius bibendum. Sed vestibulum ex dui, finibus tincidunt magna accumsan et. Praesent eget eleifend lorem, ut faucibus arcu. Mauris sapien ante, lacinia id commodo vel, dignissim eget erat. Vivamus finibus vestibulum placerat.\n\rMaecenas varius cursus nisl, vel feugiat ligula pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi et diam sem. Pellentesque at elementum sapien, vel rhoncus augue. Morbi nec pharetra massa. Nulla blandit consectetur libero, ac eleifend mauris ultricies vitae. Praesent eget sapien feugiat, maximus tortor vel, fermentum tellus. Quisque risus diam, lobortis vel nulla quis, efficitur mattis risus. Fusce imperdiet augue quis mattis scelerisque. Donec et libero nulla. Quisque venenatis viverra eros. Suspendisse tincidunt, tortor sit amet consequat egestas, dolor augue ultricies lorem, sit amet tincidunt justo neque a lorem."
    return (
        <>
            <style>
                {`
                .Intro {
                    color: red;
                    background-color: #f5f5f5;
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
                    font-size: 0.8rem;
                    margin: 5rem;
                }
                .Intro img{
                    max-width: 10rem;
                    border-radius: 50%;
                    border: 1px solid black;
                    margin: 0 1rem;
                    transition: filter 300ms


                }
                .Intro img:hover{
                    filter: drop-shadow(0 0 0.75rem black);
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
                        {lorem}
                    </p>
                </div>
            </div>
        </>
    )
}