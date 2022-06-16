console.log('App.js is running!')

//JSX - JavaScript XML
const appDetails = {
    title: "Indecision App",
    subtitle: "Hello All! Change detect by babel!",
    options: ["Hi", "Hello"]
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        appDetails.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
}


const appRoot = document.getElementById('app');

const onRemoveAll = () => {
    appDetails.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appDetails.options.length);
    const opp = appDetails.options[randomNum];
    alert(opp);
}

const render = () => {
    const template = (
        <div>
            <h1>{appDetails.title}</h1>
            <p>{appDetails.subtitle && appDetails.subtitle}</p>
            {appDetails.options.length ? "Here are options" : "No options"}
            <button disabled={appDetails.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button disabled={appDetails.options.length === 0} onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    appDetails.options.map((opt) => {
                        return <li key={opt}>{opt}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();