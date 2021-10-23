import React from "react";
import { Link } from "gatsby"
import Seo from "../components/seo"

export function Navebar() {
    return (
        <div>

            <Link to="/home/">Home</Link> <br />
            <Link to="/about/">About</Link> <br />


            hello from navebar
        </div>
    )
}