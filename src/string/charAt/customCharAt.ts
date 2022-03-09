interface String {
  customCharAt(pos: number): string;
}

String.prototype.customCharAt = function (pos: number) {
  return this[pos] || '';
};
