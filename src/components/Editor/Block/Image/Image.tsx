import React, { useState } from "react";
import * as S from "./Image.style";
import useEditorStore from "store/useEditorStore";
import { useClickOutside } from "hooks/useClickOutside";

type ImageData = {
  url: string;
};

interface Props {
  data: ImageData;
  active: boolean;
}

export default function Image({ data, active }: Props) {
  const [caption, setCaption] = useState<string>("");
  const { $ref } = useClickOutside<HTMLDivElement>(() => {
    setActiveBlock(null);
  });

  const { setActiveBlock } = useEditorStore();

  const handleBlur = () => {
    setActiveBlock(null);
  };

  return (
    <S.ImageContainer ref={$ref}>
      <S.ImageSrc src={data.url} alt="User uploaded" $clicked={active} />
      {(active || caption) && (
        <S.CaptionInput
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          onBlur={handleBlur}
          placeholder="이미지를 설명해보세요"
        />
      )}
    </S.ImageContainer>
  );
}
