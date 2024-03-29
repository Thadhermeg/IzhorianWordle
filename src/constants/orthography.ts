import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'b', 
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'r',
  's',
  'š',
  't',
  'u',
  'v',
  'y',
  'z',
  'ž',
  'ä',
  'ö',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
