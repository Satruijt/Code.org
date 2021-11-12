var x = getColumn("Periodic Table Elements", "Symbol");

for (var i = 0; i < x.length; i++) {
  if (x[i].charAt(0) == "Z") {
    console.log(x[i]);
  }
}
