import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal"

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        this.setState({
            selectedOption: this.state.options[randomNum]
        });
        //alert(this.state.options[randomNum]);
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    };
    handleDeleteOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(opt => opt !== option)
        }));
    };
    handleAddOption = (opt) => {
        if (!opt) {
            return "Enter valid value";
        }
        else if (this.state.options.indexOf(opt) > -1) {
            return 'Already exists';
        }
        this.setState((prevState) => ({ options: [...prevState.options, opt] }))
    };
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        }
        catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }

    }

    componentWillUnmount() {
        console.log("component unmount");
    }

    render() {
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0 ? true : false}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}
