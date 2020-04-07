const fs = require("fs");

const words = fs
  .readFileSync("liste.de.mots.francais.frgut.txt")
  .toString()
  .split("\r\n");

