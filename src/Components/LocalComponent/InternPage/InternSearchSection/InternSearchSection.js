import { Component } from "react";

import PlacementCardModal from "../../../Modal/PlacementCardModal/PlacementCardModal";

import "./InternSearchSection.css";

class InternSearchSection extends Component {
  state = {
    searchInput: "",
  };

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const { searchInput } = this.state;
    const { InternList } = this.props;
    const searchResults = InternList.filter(
      (data) =>
        data.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        data.Title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="app-container">
        <div className="intern-search-container">
          <h1 className="heading">Intern Stories</h1>
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
          <ul className="intern-list">
            {searchResults.map((data) => (
              <PlacementCardModal
                key={data.id}
                name={data.name}
                imgLink={data.imgLink}
                Title={data.Title}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default InternSearchSection;
