import React from "react"
import ReactDOM from "react-dom"

// ---- BEGIN BOOTSTRAP MODULES
//dependencies to use bootstrap4
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
// ---- END BOOTSTRAP MODULES

import "./index.css"
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
