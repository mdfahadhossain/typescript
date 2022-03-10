interface String {
  customAt(index: number): string | undefined;
}

String.prototype.customAt = function (index: number) {
  if (index < 0) {
    const rev = this.split('').reverse().join('');
    return rev[Math.abs(index) - 1];
  }
  return this[index];
};
