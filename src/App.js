import React from "react";
import DataTable from "./components/table";
import Wrapper from "./components/wrapper"
import DropDown from "./components/dropdown"
import Jumbotron from "./components/jumbotron"
import API from "./utils/API"

class App extends React.Component {

    //setting state
    state = {
        employees: [],
        originalState: []
    }

    //function to trigger initial rendering
    componentDidMount() {
        this.generateEmployees()
    }

    //function to generate list of employees and set state
    generateEmployees() {
        API.search()
            .then(res => this.setState({ employees: res.data.results, originalState: res.data.results }))
    }

    //function to filter by Gender
    handleFilter(gender) {
        if (gender === "All") {
            this.setState({ employees: this.state.originalState })
        } else {
            this.setState({ employees: this.state.originalState.filter(e => e.gender === gender) })
        }
    }

    //Function to render the components
    render() {
        return <Wrapper>
            <Jumbotron />
            <DataTable rows={this.state.employees} />
            <DropDown handleFilter={this.handleFilter.bind(this)} />
        </Wrapper>
    }
}

export default App;