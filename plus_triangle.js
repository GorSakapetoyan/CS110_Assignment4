const n = 5;
let line = 1;
const text = "+";
const space = " ";
while (line <= n) {
  console.log(space.repeat(n - line) + text.repeat(line));
  line++;
}
