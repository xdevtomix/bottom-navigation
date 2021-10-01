import { StyleSheetManager } from "styled-components";

import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <div data-component="app">
        <Header />
        <Main />
      </div>
    </StyleSheetManager>
  )
}