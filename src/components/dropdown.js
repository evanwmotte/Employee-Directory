import React from "react";


function DropDown(props) {
    return <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filter by Gender
  </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button class="dropdown-item" onClick={() => props.handleFilter("All")}>All</button>
            <button class="dropdown-item" onClick={() => props.handleFilter("male")}>Male</button>
            <button class="dropdown-item" onClick={() => props.handleFilter("female")}>Female</button>
        </div>
    </div>
}

export default DropDown