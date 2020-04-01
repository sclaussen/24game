This is tool that determines all the combinations of 4 numbers that
when combined together via multiplication, division, addition, or
substract, equal 24.

For more information on the game see:
- https://en.wikipedia.org/wiki/24_Game

Example:
```
$ node 24game.js 8 4 8 4
[
  '8 + 4 + 8 + 4 = 24',
  '8 + 4 * 8 / 4 = 24',
  '8 + 4 + 4 + 8 = 24',
  '8 + 4 / 4 * 8 = 24',
  '8 - 4 * 4 + 8 = 24',
  '4 + 8 + 8 + 4 = 24',
  '4 + 8 * 8 / 4 = 24',
  '4 + 8 + 4 + 8 = 24',
  '4 + 8 / 4 * 8 = 24',
  '8 + 8 + 4 + 4 = 24',
  '4 + 4 + 8 + 8 = 24'
]
```
