import React from "react";
import { UserContext } from "./index";

export default function App() {
  return (
    <div>
      <UserContext.Consumer>
        {value => <div>Hello, {value}</div>}
      </UserContext.Consumer>
    </div>
  );
}
