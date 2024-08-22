import type { ITranslationSettings } from "./interface";
import { Switch, Checkbox } from "components";
import {
  ContainerInput,
  StyledFieldset,
  Divider,
  InputHelper,
  InputExample,
  StyledInput,
} from "./styled";
import { ChangeEventHandler, useState } from "react";
import { copyrightMessage, messageMode } from "pages/Home/constants";

function TranslationSettings(props: ITranslationSettings) {
  const { handleSetRecipientInfo, handleToggleCopyright, recipientInfo } =
    props;

  const [isPrivateMessage, setIsPrivateMessage] = useState(false);

  const handleTogglePrivateMessage: ChangeEventHandler<HTMLInputElement> = ({
    target: { checked },
  }) => {
    if (!checked) {
      handleSetRecipientInfo("");
    }
    setIsPrivateMessage(checked);
  };

  return (
    <StyledFieldset>
      <legend>Settings</legend>
      <Switch
        knobs={messageMode}
        label="Message mode:"
        onChange={handleTogglePrivateMessage}
      />

      <ContainerInput isHidden={!isPrivateMessage}>
        <StyledInput
          value={recipientInfo}
          placeholder="username or phone number"
          onChange={({ target }) => handleSetRecipientInfo(target.value)}
        />
        <InputHelper>
          The exact username, which should be capitalized and the lowercase
          letters, or the phone number of the recipient of the message, as in
          the example below.
        </InputHelper>
        <InputExample>Example: mohammadReZa or 09121234567</InputExample>
      </ContainerInput>

      <Divider />
      <Checkbox
        label={copyrightMessage}
        title="add copyright"
        onChange={handleToggleCopyright}
      />
    </StyledFieldset>
  );
}

export default TranslationSettings;
