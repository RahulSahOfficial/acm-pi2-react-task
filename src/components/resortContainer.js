import { resortData } from "../assets/data/data";
import ResortItem from "./resortItem";
import "../css/resortContainer.css";
function Resorts() {
  return (
    <div className="resortContainer">
      {resortData.map((each) => {
        return (
          <ResortItem
            name={each.name}
            image={each.image}
            desc={each.description}
            price={each.price}
          />
        );
      })}
    </div>
  );
}
export default Resorts;
