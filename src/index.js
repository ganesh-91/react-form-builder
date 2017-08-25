import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class ReactFormBuilder extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        console.log("formJson", this.props.formJson);
        const formJson = this.props.formJson;
        return (
            <form id={formJson.id || ""} className={formJson.className || ""} name={formJson.name || ""}>
                {formJson.formFeilds.map((feild) => {
                    switch (feild.tagName) {
                        case "input":
                            return (<input value={feild.value || ""}
                                type={feild.type}
                                placeholder={feild.placeHolder || ""}
                                name={feild.name || ""} />);
                            break;

                        case "select":
                            return (<select value={feild.value || ""}
                                placeholder={feild.placeHolder || ""}
                                name={feild.name || ""} >
                                {feild.options.map((option) => {
                                    return (<option value={option.value}>{option.label}</option>);
                                })}
                            </select >);
                            break;
                    }
                    {/* return (<{ feild.tagName } />); */ }
                })}
            </form>
        );
    }
}

export default ReactFormBuilder;