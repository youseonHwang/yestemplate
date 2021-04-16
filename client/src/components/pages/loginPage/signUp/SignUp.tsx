import * as React from "react";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
//{ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props
function SingUpComponent() {

  return (
    <div className="hello">
      <div className="greeting">
        <p>"안녕"</p>
      </div>
    </div>
  );
}

export default SingUpComponent;
