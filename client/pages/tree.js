import Card from "../components/card";
import classNames from "classnames";

export default function Tree() {
  let divClass = classNames({
    "grid  md:grid-cols-5 md:auto-cols-auto grid-cols-2 gap-8 px-4 py-8 justify-items-stretch": true,
  });
  return (
    <div className='place-items-center '>
      <div className={divClass}>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
      <hr />

      <div className={divClass}>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card isBright={true} />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
      <hr />
      <div className={divClass}>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}
