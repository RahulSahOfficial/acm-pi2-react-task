import "../css/resortItem.css";
import { FaAngleRight, FaEllipsisVertical } from "react-icons/fa6";
const imgPath = "image/";
function ResortItem(props) {
  return (
    <div className="resortItem">
      <div className="imgBox">
        <img src={imgPath + props.image} alt={props.name} />
        <FaEllipsisVertical />
      </div>
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <div className="priceBtnDiv">
        <h3 className="price">${props.price.toFixed(2)}</h3>
        <button>
          View Deal <FaAngleRight />
        </button>
      </div>
    </div>
  );
}
export default ResortItem;
