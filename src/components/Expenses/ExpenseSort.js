const ExpenseSort = (props) => {
  const map1 = props.item.map((item) => {
    return (
      <div>
        <div className="box-shadow">
          <div className="stroke-s1-top">
            <div className="title-s1">{item.title}</div>
          </div>
          <div className="height2px">&nbsp;</div>
          <div className="stroke-s1-bottom">
            <div>amount: ${item.amount}</div>
            <div>date: {item.date.getFullYear()}</div>
            <div>id: {item.id}</div>
          </div>
        </div>
        <div className="height10px">&nbsp;</div>
      </div>
    );
  });
  return map1;
};
export default ExpenseSort;
