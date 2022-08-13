interface String {
  customEndsWith(searchString: string, endPosition?: number): boolean;
}

String.prototype.customEndsWith = function (searchString: string, endPosition?: number) {
  if (!endPosition || endPosition > this.length) {
    endPosition = this.length;
  }
  return this.substring(endPosition - searchString.length, endPosition) === searchString;
};
