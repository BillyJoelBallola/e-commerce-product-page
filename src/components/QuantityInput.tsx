import { TiMinus, TiPlus } from "react-icons/ti";

type Props = {
  adjustQty: (action: "add" | "subtract") => void;
  quantity: number;
};

function QuantityInput({ adjustQty, quantity }: Props) {
  return (
    <div className="flex items-center gap-2 w-fit">
      <button
        onClick={() => adjustQty("subtract")}
        className="cursor-pointer hover:bg-neutral-200 rounded-sm p-1 duration-150 ease-in-out"
      >
        <TiMinus />
      </button>
      <input
        disabled
        type="number"
        className="w-[40px] text-center text-xl font-semibold"
        value={quantity}
      />
      <button
        onClick={() => adjustQty("add")}
        className="cursor-pointer hover:bg-neutral-200 rounded-sm p-1 duration-150 ease-in-out"
      >
        <TiPlus />
      </button>
    </div>
  );
}

export default QuantityInput;
