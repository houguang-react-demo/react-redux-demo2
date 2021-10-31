import ListUI from "./ListUI";
import store from "../../store";
import {Component} from "react";
import {getListData} from "./reducer";

class App extends Component{

    componentDidMount() {
        store.dispatch(getListData())
    }

    render() {
        return (
            <div style={{
                width: "600px",
                padding: "20px",
                background: "#ccc"
            }}>
                <ListUI />
            </div>
        );
    }
}

export default App;
