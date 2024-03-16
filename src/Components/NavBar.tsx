import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <>
            <style>
                {`
                nav {
                    background-color: #f5f5f5;
                    height: 3rem;
                    width: 100%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                    padding: 0 0rem;
                    box-shadow: 0 0 0.5rem black;
                }
                nav .link {
                    color: black;
                    text-decoration: none;
                    font-size: 1.2rem;
                    font-weight: bold;
                    transition: filter 300ms;
                }
                nav .link:hover {
                    filter: drop-shadow(0 0 0.75rem black);
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