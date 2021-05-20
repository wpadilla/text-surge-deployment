export const cleanText = (text: string): string => {
  return text.toLowerCase().replace(/[ ]/gi, '');
};
