import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'ä',
  'ö',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'l',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'z',
  'ž',
  'c',
  'v',
  'b',
  'n',
  'm',
  'š',
  'ь',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
