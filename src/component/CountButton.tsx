const CountButton = ({ onClickCount, likesCount, onDislike,reetLikes }) => {
  console.log(likesCount);
  return (
    <div>
      <button onClick={onClickCount}>{`like count ${likesCount}`} </button>
      <button onClick={onDislike}>{`dis Like count ${likesCount}`} </button>
      <button onClick={reetLikes}>{`reset Like count ${likesCount}`} </button>
    </div>
  );
};

export default CountButton;
