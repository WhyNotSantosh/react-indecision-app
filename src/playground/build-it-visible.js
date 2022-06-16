class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleButton = this.toggleButton.bind(this);
        this.state = { visibility: false };
    }
    toggleButton() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleButton}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.state.visibility && <p>These are some details.</p>}
            </div>
        );
    };
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let btnText = "Show details";
// let toggleFlag = true;
// const toggleButton = () => {
//     toggleFlag = !toggleFlag;
//     btnText = toggleFlag ? "Show details" : "Hide details";
//     render();
// }

// const app = document.getElementById("app");

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleButton}>{btnText}</button>
//             <p hidden={toggleFlag}>This are some details</p>
//         </div>
//     );
//     ReactDOM.render(template, app);
// }

// render();