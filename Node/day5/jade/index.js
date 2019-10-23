import { WeElement, define, h } from "omi";

class ComponentName extends WeElement {
  render(props) {
    return h("div", null, "abc", h("p", null, "123"));
  }
}

ComponentName.css = `
p{
    color:red;
}
span{
    font-size:14px;
}
`;
define("component-name", ComponentName);
