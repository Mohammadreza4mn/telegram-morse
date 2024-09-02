import type { ITranslationSettings } from "./interface";
import { Switch, Checkbox, Input } from "components";
import * as Styled from "./styled";
import { ChangeEventHandler, useState } from "react";
import { copyrightMessage, messageMode } from "pages/Home/constants";

function TranslationSettings(props: ITranslationSettings) {
  const { handleSetRecipientInfo, handleToggleCopyright, recipientInfo } =
    props;

  const [isPrivateMessage, setIsPrivateMessage] = useState(false);
  const [toggleShow, setToggleShow] = useState(false);

  const handleTogglePrivateMessage: ChangeEventHandler<HTMLInputElement> = ({
    target: { checked },
  }) => {
    if (!checked) {
      handleSetRecipientInfo("");
    }
    setIsPrivateMessage(checked);
  };
  const handleToggleSettings = () => setToggleShow((state) => !state);

  return (
    <Styled.StyledFieldset>
      <legend>Settings</legend>

      <Styled.Slogan isHidden={toggleShow}>
        Go into settings to customize your Morse code message...
      </Styled.Slogan>

      <Styled.Main isHidden={!toggleShow}>
        <Switch
          knobs={messageMode}
          label="Message mode:"
          onChange={handleTogglePrivateMessage}
        />

        <Styled.ContainerInput isHidden={!isPrivateMessage}>
          <Input
            value={recipientInfo}
            placeholder="username or phone number"
            onChange={({ target }) => handleSetRecipientInfo(target.value)}
          />
          <Styled.InputHelper>
            The exact username, which should be capitalized and the lowercase
            letters, or the phone number of the recipient of the message, as in
            the example below.
          </Styled.InputHelper>
          <Styled.InputExample>
            Example: mohammadReZa or 09121234567
          </Styled.InputExample>
        </Styled.ContainerInput>

        <Styled.Divider />
        <Checkbox
          label={copyrightMessage}
          title="add copyright"
          onChange={handleToggleCopyright}
        />
      </Styled.Main>

      <Styled.ContainerBtn>
        <Styled.BtnToggle
          onClick={handleToggleSettings}
          direction={toggleShow ? "top" : "bottom"}
        />
      </Styled.ContainerBtn>
    </Styled.StyledFieldset>
  );
}

export default TranslationSettings;
