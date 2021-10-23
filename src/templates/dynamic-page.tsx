import React from "react";
import { Link } from "gatsby"

import Seo from "../components/seo"

export default function FriudMango({ pagecontext }) {
    console.log(pagecontext)
    return (
        <div>
            <h2> hello from Friud </h2>

            {pagecontext.name}
        </div>
    )
}