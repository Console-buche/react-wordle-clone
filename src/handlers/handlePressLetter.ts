export const handlePressLetter = (
  prevWord: string,
  key: string,
  compareWordLength: number
) => {
  const newWord = `${prevWord}${key}`;
  const isWordLengthOk = newWord.length < compareWordLength;
  if (isWordLengthOk) {
    return newWord;
  }
  return prevWord;
};
