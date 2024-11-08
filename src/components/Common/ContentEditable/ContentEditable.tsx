import React, { useRef } from "react";
import * as S from "./ContentEditable.style";
import { COMMON_THEME } from "styles/Theme";
import NotificationBar from "components/Common/NotificationBar/NotificationBar";
import { useNotification } from "hooks/useNotification";

interface ContentEditableProps {
  initialText?: string;
  placeholder?: string;
  maxLength?: number;
  exceedMessage?: string;
  fontSize?: number;
  fontWeight?: number;
  fontFamily?: string;
  fontColor?: string;
  lineHeight?: number;
  placeholderColor?: string;
  cursorColor?: string;
  textAlign?: string;
  onChange?: (text: string) => void;
}

export default function ContentEditable({
  initialText = "",
  placeholder = "",
  maxLength = 2000,
  exceedMessage = "2000자 이상 입력할 수 없습니다.",
  fontSize = 16,
  fontWeight = 400,
  fontFamily = "Noto Sans",
  lineHeight = 19,
  onChange,
  fontColor = COMMON_THEME.black_primary,
  placeholderColor = COMMON_THEME.gray_primary,
  cursorColor = COMMON_THEME.black_primary,
  textAlign = "left",
}: ContentEditableProps) {
  const contentEditable = useRef<HTMLDivElement>(null);

  const { isVisible, showNotification } = useNotification(2000);

  const handleText = (e: React.ChangeEvent<HTMLDivElement>) => {
    const inputText = e.target.innerText || "";

    // 입력된 텍스트가 maxLength를 초과하면
    if (inputText.length > maxLength && contentEditable.current) {
      // 커서 위치를 저장합니다.
      const selection = window.getSelection();
      const range = selection?.getRangeAt(0);
      const cursorPosition = range?.startOffset;

      // 텍스트를 잘라내고 업데이트합니다.
      const trimmedText = inputText.slice(0, maxLength);
      contentEditable.current.textContent = trimmedText;

      // 잘린 후 커서를 원래 위치로 복원합니다.
      if (selection && range && cursorPosition) {
        // 커서 위치를 현재 텍스트 길이에 맞춰 조정합니다.
        const newCursorPosition = Math.min(cursorPosition, trimmedText.length);

        // 새로운 range를 설정하여 커서를 원래 위치로 이동합니다.
        const newRange = document.createRange();
        newRange.setStart(
          contentEditable.current.childNodes[0],
          newCursorPosition
        );
        newRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(newRange);
      }

      showNotification();
    } else {
      if (onChange) {
        onChange(inputText);
      }
    }
  };

  return (
    <>
      <S.EditableDiv
        ref={contentEditable}
        contentEditable
        onInput={handleText}
        placeholder={placeholder}
        $fontFamily={fontFamily}
        $fontSize={fontSize}
        $fontWeight={fontWeight}
        $fontColor={fontColor}
        $lineHeight={lineHeight}
        $placeholderColor={placeholderColor}
        $cursorColor={cursorColor}
        $textAlign={textAlign}
        suppressContentEditableWarning
      >
        {initialText}
      </S.EditableDiv>

      <NotificationBar isVisible={isVisible}>{exceedMessage}</NotificationBar>
    </>
  );
}
