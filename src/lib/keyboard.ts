/*
class KeyboardDelegate() {
  const keyFns = {};
}
*/

class Keyboard {

}

const keyFns = {};

function handleKeypress(e: any) {
  // if keyFns[e.key]
  //   do i preventdefault and stoppropagation?
  //   or is that on the function to do?
  //   keyFns[e.key]()
  console.log("I'm handling the keypress! Woooo!");
  const fn = keyFns[e.key];
  if (fn) {
    fn()
  }
  /*
  switch (e.key) {
    case 'd':
    case 't':
      e.preventDefault();
      //toggleColorScheme();
      e.stopPropagation();
      break;
    default:
  }
  */
}

export function setupKeyboardDelegate() {
  window.addEventListener('keyup', handleKeypress);
}

export function removeKeyboardDelegate() {
  window.removeEventListener('keyup', handleKeypress);
}

export function registerKey(key: string, fn: () => void) {
  console.log("registering key...")
  console.log(key)
  console.log(fn)
  
  keyFns[key] = fn;
  // if !keyFns[key]
  //   keyFns[key] = fn
  // else
  //   throwError key listener collision for {key}
  return null;
}

