import React from "react"

export const Layout = (props) => (
    <div 
      style={{maxWidth: 900, margin: '0 auto'}}
    >
        {props.children}
    </div>
)
