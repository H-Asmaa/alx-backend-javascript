export default function cleanSet(set, startString) {
  let result = '';
  if (startString) {
    for (const setElem of set) {
      if (setElem.startsWith(startString)) {
        result = result === ''
          ? setElem.slice(startString.length)
          : `${result}-${setElem.slice(startString.length)}`;
      }
    }
  }
  return result;
}
