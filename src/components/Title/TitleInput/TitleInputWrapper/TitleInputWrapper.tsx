import * as S from "./TitleInputWrapper.style";
import useTitleStore from "store/useTitleStore";
import TitleTextInput from "components/Title/TitleInput/TitleTextInput/TitleTextInput";
import SubtitleTextInput from "components/Title/TitleInput/SubtitleTextInput/SubtitleTextInput";

export default function TitleInputWrapper() {
  const titleImage = useTitleStore((state) => state.titleCoverImage);
  const titleCoverColor = useTitleStore((state) => state.titleCoverColor);
  const titleAlign = useTitleStore((state) => state.alignment);

  return (
    <S.TitleInputWrapper
      $align={titleAlign}
      $hasBackground={!!titleImage || !!titleCoverColor}
    >
      <TitleTextInput />
      <SubtitleTextInput />
    </S.TitleInputWrapper>
  );
}
