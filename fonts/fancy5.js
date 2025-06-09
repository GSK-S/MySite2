// الخط المزخرف: Double-Struck Letters (𝔸 𝔹 ℂ ...) من Unicode

const doubleStruckMap = {
  A: 'ꓮ', B: 'Ꞗ', C: 'ᑕ', D: 'ᗪ', E: 'ᕮ', F: 'Ғ', G: 'Ǥ',
  H: 'Ƕ', I: 'Ꮖ', J: 'ʖ', K: 'Ҝ', L: 'ᒪ', M: 'ᗰ', N: 'ﬡ',
  O: 'ᗝ', P: 'ᖘ', Q: 'Ǫ', R: 'ᖇ', S: 'Տ', T: 'Ƭ', U: 'Ս',
  V: 'Ѵ', W: 'Ѡ', X: 'Ҳ', Y: 'Ƴ', Z: 'Ƶ',
  a: 'ค', b: '๒', c: 'ς', d: '๔', e: 'є', f: 'f', g: 'ɠ',
  h: 'ђ', i: 'เ', j: 'ן', k: 'к', l: 'l', m: '๓', n: 'ภ',
  o: '๏', p: 'ק', q: 'ợ', r: 'г', s: 'ร', t: 'Շ', u: 'ย',
  v: 'ש', w: 'ฬ', x: 'א', y: 'ץ', z: 'չ'
};

export function fancy5(text) {
  return text
    .split('')
    .map(c => doubleStruckMap[c] || c)
    .join('');
}