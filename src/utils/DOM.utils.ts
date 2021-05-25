/*pasteHtmlAtCaret: paste html in the caret specified
* @param html: html to be pasted
* @param range: position where the html will be pasted
* @param selection: selection did into the content editable
* */
export const pasteHtmlAtCaret = (html: string, range: Range, selection: Selection) => {

  const el = document.createElement('div');
  el.innerHTML = html;
  const frag = document.createDocumentFragment();
  let node;
  let lastNode;
  while ((node = el.firstChild)) {
    lastNode = frag.appendChild(node);
  }
  range.insertNode(frag);

  // Preserve the selection
  if (lastNode) {
    range = range.cloneRange();
    range.setStartAfter(lastNode);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }
};

/* getCaretPosition: get the caret position into the element received
* @param element: element where we will verify the caret position
* @return { range: exact position of the caret, selection: selection did in the contenteditable } */
export const getCaretPosition = (element: HTMLElement): { range: Range, selection: Selection } => {
  element?.focus();
  let selection: Selection = {} as any;
  let range: Range = {} as any;
  if (window.getSelection) {
    selection = window.getSelection() || {} as any;
    if (selection.getRangeAt && selection.rangeCount) {
      range = selection.getRangeAt(0);
    }
  }

  return {
    range,
    selection,
  };
};
