import React from "react";
import { Link } from "gatsby"

import Seo from "../components/seo"

export default function Friud({ pageContext }) {
  console.log(pageContext.name)
  return (
    <div>
      <h2> hello from Friud {pageContext.name} </h2>

    </div>
  )
}