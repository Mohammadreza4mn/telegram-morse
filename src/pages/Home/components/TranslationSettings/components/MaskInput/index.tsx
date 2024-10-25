import type { IMaskInput } from "./interface";
import { ContainerMaskInput, Mask } from "./styled";
import { ChangeEventHandler, useRef, useState } from "react";

function MaskInput(props: IMaskInput) {
  const { handleShowInput, maskTitle, onChangeInput, renderInput } = props;

  const refInput = useRef<HTMLInputElement>(null);
  const [toggleMask, setToggleMask] = useState(true);

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.value) {
      setToggleMask(false);
    } else {
      setToggleMask(true);
    }

    onChangeInput(event);
  };

  const handleClickMask = () =>
    handleShowInput({ ref: refInput, toggleMask: setToggleMask });

  return (
    <ContainerMaskInput>
      {toggleMask && <Mask onClick={handleClickMask}>{maskTitle}</Mask>}
      {renderInput({
        onChange: handleChangeInput,
        ref: refInput,
        toggleMask: setToggleMask,
      })}
    </ContainerMaskInput>
  );
}

export default MaskInput;
