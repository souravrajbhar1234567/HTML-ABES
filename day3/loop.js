let n = 5;  // height of the pyramid

for (let i = 1; i <= n; i++) {
  let spaces = " ".repeat(n - i);    // leading spaces
  let stars = "* ".repeat(i);        // stars
  console.log(spaces + stars);
}
