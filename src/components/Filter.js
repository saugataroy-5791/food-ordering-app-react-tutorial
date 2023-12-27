const Filter = (props) => {
   const { onTopRatedBtnClicked, onResetBtnClicked } = props;

   return (
      <div className="filter ml-5">
         <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" onClick={onTopRatedBtnClicked}>Top rated restaurants</button>
         <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onResetBtnClicked}>Reset</button>
      </div>
   )
}

export default Filter;
