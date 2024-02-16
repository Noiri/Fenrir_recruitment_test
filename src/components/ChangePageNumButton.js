const ChangePageNumButton = (props) => {
  const totalPageNum = props.totalPageNum;
  const setPageNum = props.setPageNum;
  return (
    <ul>
      {[...Array(Math.ceil(totalPageNum / 3)).keys()].map((ord, i) => {
        return (
          <div key={i}>
            <button
              onClick={() => {
                setPageNum(i);
              }}
            >
              Page = {i}
            </button>
          </div>
        );
      })}
    </ul>
  );
};

export default ChangePageNumButton;
