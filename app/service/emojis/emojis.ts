const EMOJI_LIST : string[] = [
  "😀","😁","😂","🤣","😅","😊","😍","😎","🤩",
  "😇","🤖","🎃","🐶","🐱","🐸","🐵",
  "🍎","🍕","🍩","🍪","⚽","🏀","🚗","✈️",
  "❤️","🔥","✨","🎉","🌈","⭐"
];

export const randomEmoji = () =>
  EMOJI_LIST[Math.floor(Math.random() * EMOJI_LIST.length)];