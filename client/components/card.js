import classNames from "classnames";

const Card = ({ isBright = false }) => {
  let divClass = classNames({
    "md:container md:mx-auto justify-items-center border-4 ": true,
    "border-red-400 bg-red-100 ": isBright,
    "border-green-400 bg-green-100": !isBright,
  });
  return (
    <div className={divClass}>
      <img src='/vercel.svg' alt='' />
      <p>Sarthak Agrawal</p>
    </div>
  );
};

export default Card;
