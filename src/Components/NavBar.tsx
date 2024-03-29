import { Link } from "react-router-dom"
import { useAppSelector } from "./Redux/Hooks"

export const NavBar = () => {
    const style = useAppSelector((state) => {
        return state.style
    })
    return (
        <>
            <style>
                {`
                nav {
                    background-color: ${style.Container.Colour};
                    height: 3rem;
                    width: 100%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                    padding: 0 0rem;

                    box-shadow: 0 10px 10px hsl(231, 20%, 7%);
                }
                nav .link {
                    color: white;
                    text-decoration: none;
                    font-size: 1.2rem;
                    font-weight: bold;
                    padding:0.4rem;
                    border:solid;
                    border-radius:10%;
                    border-width:1px;
                    border-color: #1B1B1F;
                    transition:  500ms;
                }
                nav .link:hover {
                    color: hsl(237, 100%, 70%);
                    
                }
            `}
            </style>
            <nav>
                <Link className="link" to="/">Home</Link>
                {/* <Link className="link" to="/projects">Projects</Link> */}
                <Link className="link" to="/contact">Contact</Link>
            </nav>
        </>
    )
}