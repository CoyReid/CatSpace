export default function Sort({ handleSortChange }) {
  return (
    <>
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
    </>
  );
}
