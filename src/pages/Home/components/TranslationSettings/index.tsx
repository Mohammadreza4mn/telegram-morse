import type { ITranslationSettings } from "./interface";
import { Input, DateTime } from "components";
import { Main, StyledFieldset } from "./styled";
import { ChangeEventHandler } from "react";
import { MaskInput } from "./components";
import type {
  IHandleShowInput,
  TToggleMask,
} from "./components/MaskInput/interface";

function TranslationSettings(props: ITranslationSettings) {
  const { handleSetRecipientInfo, handleAddMessageTimer, recipientInfo } =
    props;

  const handleShowInputDateTime = ({ ref }: IHandleShowInput) =>
    ref.current?.showPicker();

  const handleShowInputMessagePrivate = ({
    ref,
    toggleMask,
  }: IHandleShowInput) => {
    toggleMask(false);
    ref.current?.focus();
  };

  const onChangeInputMessagePrivate: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => handleSetRecipientInfo(event.target.value);

  const onChangeInputDateTime: ChangeEventHandler<HTMLInputElement> = (event) =>
    handleAddMessageTimer(event);

  const handleBlurInputMessagePrivate = ({
    event,
    toggleMask,
  }: {
    event: React.FocusEvent<HTMLInputElement, Element>;
    toggleMask: TToggleMask;
  }) => {
    if (!event.target.value) {
      toggleMask(true);
    }
  };

  return (
    <StyledFieldset>
      <legend>Settings</legend>

      <Main>
        <MaskInput
          handleShowInput={handleShowInputMessagePrivate}
          maskTitle="Message privately 🔐"
          onChangeInput={onChangeInputMessagePrivate}
          renderInput={({ toggleMask, ...props }) => (
            <Input
              value={recipientInfo}
              placeholder="Recipient's username or mobile"
              onBlur={(event) =>
                handleBlurInputMessagePrivate({ event, toggleMask })
              }
              {...props}
            />
          )}
        />

        <MaskInput
          handleShowInput={handleShowInputDateTime}
          maskTitle="Disappearing message ⏱️"
          onChangeInput={onChangeInputDateTime}
          renderInput={({ toggleMask, ...props }) => <DateTime {...props} />}
        />
      </Main>
    </StyledFieldset>
  );
}

export default TranslationSettings;
