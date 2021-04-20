import "./squareLoader.css";

const SquareLoader = ({ alignment }) => {
   return (
      <span className={"loader " + alignment}>
         <span className="loader-inner"></span>
      </span>
   );
};

export default SquareLoader;
