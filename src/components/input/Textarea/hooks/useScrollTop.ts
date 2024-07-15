import {
  TextareaHTMLAttributes,
  UIEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

interface IUseScrollTop {
  value: TextareaHTMLAttributes<HTMLTextAreaElement>["value"];
}

function useScrollTop(props: IUseScrollTop) {
  const [toggle, setToggle] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textareaRef.current && detectShowScrollbar(textareaRef.current);
  }, [props.value]);

  const detectShowScrollbar = (target: EventTarget & HTMLTextAreaElement) => {
    const hasScrollbar = target.scrollHeight > target.clientHeight;

    setToggle(hasScrollbar);
  };

  const handleOnScroll: UIEventHandler<HTMLTextAreaElement> = (event) => {
    const fontHeight = 32;
    const scrollTop = event.currentTarget.scrollTop;

    setToggle(scrollTop >= fontHeight ? true : false);
  };

  const handleScrollTop = () =>
    textareaRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return { handleOnScroll, handleScrollTop, textareaRef, toggle };
}

export default useScrollTop;
