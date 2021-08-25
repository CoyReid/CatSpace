import { Input, Item } from "semantic-ui-react";

function SearchSort({ search, onSearchChange, onSortChange }) {

    function handleSearchChange(e) {
        onSearchChange(e.target.value)
    }

    function handleSortChange(e) {
        onSortChange(e.target.value)
    }

    return (
        <Item.Group>
            <Input 
                name="search"
                placeholder="Search by username..."
                value={search}
                onChange={handleSearchChange}
            />
            <label className="sortLabel">Sort By:</label>
            <select className="sortDropdown" onChange={handleSortChange}>
                <option className="sortOption" value="all">All</option>
                <option className="sortOption" value="mostlikes">Most Likes</option>
                <option className="sortOption" value="leastlikes">Least Likes</option>
                <option className="sortOption" value="postsasc">Posts Ascending</option>
                <option className="sortOption" value="postsdesc">Posts Descending</option>
            </select>
        </Item.Group>
    )
}

export default SearchSort