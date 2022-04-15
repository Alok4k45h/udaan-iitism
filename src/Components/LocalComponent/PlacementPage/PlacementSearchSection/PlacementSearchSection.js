import { Component } from "react";

import PlacementCardModal from "../../../Modal/PlacementCardModal/PlacementCardModal";

import "./PlacementSearchSection.css";

class PlacementSearchSection extends Component {
  state = {
    searchInput: "",
  };

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const { searchInput } = this.state;
    const { PlacementList } = this.props;

    const searchResults = PlacementList.filter(
      (data) =>
        data.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        data.Title.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log(searchResults.name);

    return (
      <div className="app-container">
        <div className="placement-search-container">
          <h1 className="heading">placement Stories</h1>
          <div className="search-input-container">
            <input
              type="search"
              className="search-input"
              placeholder="Search Name or Company"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="placement-list">
            {searchResults.map((data) => (
              <PlacementCardModal
                id={data.id}
                name={data.name}
                imgLink={data.imgLink}
                Title={data.Title}
                QueryList={data.QueryList}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default PlacementSearchSection;
