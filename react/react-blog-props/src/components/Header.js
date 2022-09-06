import Navbar from "./Navbar"
import '../index.css'

export default function Header() {
    return (
        <div className="header">
            <Navbar />
            <h1 className="blog-title">Clean Blog</h1>
            <p className="blog-subtitle">A Blog Theme by Start Bootstrap</p>
        </div>


    )
}