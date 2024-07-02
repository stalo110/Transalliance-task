import Layer from "../assets/Frame 524laptop.svg";
import Button from "./Button";

const Break = () => {
  return (
    <div>
      <div className="flex items-end">
        <div className="flex-1 mt-[5.5rem] bg-green-500">
          <div className="pt-10 pl-80 pr-10">
            <h2 className="text-3xl">The human-powered payments network</h2>
            <p>
              Driven by a team of over 200 global payments experts with absolute
              dedication to solving our customers’ most complex cross-border
              payments challenges.
            </p>
            <Button className="bg-yellow-400 my-10">learn more</Button>
          </div>
        </div>
        <div className="flex-1">
          <img src={Layer} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Break;
