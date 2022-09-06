import '../index.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-title">Start Bootstrap</div>
            <label for="menu">&#9776;</label>
            <input type="checkbox" id="menu" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Sample Post</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}