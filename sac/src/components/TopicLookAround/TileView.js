import "../../styles/TileView.css";

const TileView = ({ boards }) => {
  return (
        <div className="tile-container">
        {boards.map((board, index) => (
            <div className="tile-view" key={index}>
            <div className="tile-header">
                <div
                className="tile-image"
                style={{ backgroundImage: `url(${board.image})` }}
                />
                <div className="tile-header-text">{board.title}
                    <div className="tile-header-button">+</div>
                </div>
            </div>
            <div className="tile-body">
                <span className="tile-body-text">{board.content}</span>
            </div>
            </div>
        ))}
        </div>
    );
    };

export default TileView;
