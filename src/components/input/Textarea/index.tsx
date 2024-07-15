import type { ITextarea } from "./interface";
import useScrollTop from "./hooks/useScrollTop";
import { StyledTextarea, BtnTop, Container } from "./styled";

function Textarea(props: ITextarea) {
  const { handleOnScroll, handleScrollTop, textareaRef, toggle } = useScrollTop(
    { value: props.value }
  );

  return (
    <Container>
      <StyledTextarea {...props} onScroll={handleOnScroll} ref={textareaRef} />
      {toggle && <BtnTop onClick={handleScrollTop} />}
    </Container>
  );
}

export default Textarea;
