/*
class KeyboardDelegate() {
  const keyFns = {};
}
*/

interface KeyEvents {
  [key: string]: () => void;
}

const keyFns: KeyEvents = {};

function handleKeypress(e: any) {
  //   do i preventdefault and stoppropagation here?
  if (e.key in keyFns) {
    keyFns[e.key]();
  }
}

export function setupKeyboardDelegate() {
  window.addEventListener('keyup', handleKeypress);
}

export function removeKeyboardDelegate() {
  window.removeEventListener('keyup', handleKeypress);
}

export function registerKey(key: string, fn: () => void) {
  keyFns[key] = fn;
  // if !keyFns[key]
  //   keyFns[key] = fn
  // else
  //   throwError key listener collision for {key}
  return null;
}

