import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <>
            <style>
                {`
                nav {
                    background-color: #1B1B1F;
                    height: 3rem;
                    width: 100%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                    padding: 0 0rem;
                    border-bottom-style:solid;
                    border-bottom-color: black;
                    border-bottom-width: 2px;
                    box-shadow: 0 0 3rem black;
                }
                nav .link {
                    color: white;
                    text-decoration: none;
                    font-size: 1.2rem;
                    font-weight: bold;
                    transition: filter 300ms;
                }
                nav .link:hover {
                    filter: drop-shadow(0 0 0.75rem red);
                }
            `}
            </style>
            <nav>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/projects">Projects</Link>
                <Link className="link" to="/contact">Contact</Link>
            </nav>
        </>
    )
}