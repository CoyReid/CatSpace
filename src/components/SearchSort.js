import { Input, Item, Grid } from "semantic-ui-react";

function SearchSort({ search, onSearchChange, onSortChange }) {
  function handleSearchChange(e) {
    onSearchChange(e.target.value);
  }

  function handleSortChange(e) {
    onSortChange(e.target.value);
  }

  return (
    <Grid>
      <Grid.Column textAlign="center">
        <Item.Group>
          <Input
            className="searchBar"
            name="search"
            placeholder="Search by username..."
            value={search}
            onChange={handleSearchChange}
          />
          <label className="sortLabel">Sort By:</label>
          <select className="sortDropdown" onChange={handleSortChange}>
            <option className="sortOption" value="all">
              All
            </option>
            <option className="sortOption" value="mostlikes">
              Most Liked
            </option>
            <option className="sortOption" value="leastlikes">
              Least Liked
            </option>
            <option className="sortOption" value="postsasc">
              Posts Ascending
            </option>
            <option className="sortOption" value="postsdesc">
              Posts Descending
            </option>
          </select>
        </Item.Group>
      </Grid.Column>
    </Grid>
  );
}

export default SearchSort;
