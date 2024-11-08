import React, { useRef } from "react";
import * as S from "./VideoIcon.style";
import useEditorStore from "store/useEditorStore";

export default function VideoIcon() {
  const { addBlock } = useEditorStore();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const videoUrl = reader.result as string;
        addBlock("video", { url: videoUrl });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <S.VideoIconWrapper>
      <S.VideoIcon onClick={handleIconClick} />
      <S.VideoFileInput
        type="file"
        accept="video/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </S.VideoIconWrapper>
  );
}
