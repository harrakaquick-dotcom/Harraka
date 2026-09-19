import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import './style.css';

// min-h-dvh + flex-1 on <main> keeps the footer at the bottom of the viewport
// on short pages, and pushes it below the content on long ones.
const Applayout = () => {
    return (
        <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Applayout
