interface String {
  customConcat(...strings: string[]): string;
}

String.prototype.customConcat = function (...strings: string[]) {
  return this + strings.join('');
};
