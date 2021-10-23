import React from "react";
import { Link } from "gatsby"
import { Navebar } from './navebar'
import Seo from "../components/seo"

export function Child({ children }) {
    return (
        <div>
            hello from children
            <Navebar />
            {children}
        </div>
    )
}