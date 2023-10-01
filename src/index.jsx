import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ""
        };
    }



    item = () => {
        const saxeli = "Nino";
        this.setState({ name: saxeli }, () => {
            window.alert(this.state.name);
        });
    };

    render() {
        return (
            <>
                <button type="button" className={"btn btn-success"} onClick={this.item}>დააკლიკე ჩემი სახელის გასაგებად</button >
            </>
        );
    }
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);

