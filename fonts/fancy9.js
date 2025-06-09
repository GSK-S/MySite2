// الخط المزخرف: Double-struck Unicode Letters

const doubleStruckMap = {
  A: '🅐', B: '🅑', C: '🅒', D: '🅓', E: '🅔', F: '🅕', G: '🅖',
  H: '🅗', I: '🅘', J: '🅙', K: '🅚', L: '🅛', M: '🅜', N: '🅝',
  O: '🅞', P: '🅟', Q: '🅠', R: '🅡', S: '🅢', T: '🅣', U: '🅤',
  V: '🅥', W: '🅦', X: '🅧', Y: '🅨', Z: '🅩'
};

export function fancy9(text) {
  return text
    .split('')
    .map(c => doubleStruckMap[c] || c)
    .join('');
}