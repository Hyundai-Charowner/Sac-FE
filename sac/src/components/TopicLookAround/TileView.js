import "../../styles/TileView.css";

const TileView = ({ boards }) => {
  return (
    <div className="tileContainer">
      {boards.map((board, index) => (
        <div className="tileView" key={index}>
          <div
            className="tileImage"
            style={{ backgroundImage: `url(${board.image})` }}
          />
          <span className="tileText">{board.title}</span>
        </div>
      ))}
    </div>
  );
};

export default TileView;
