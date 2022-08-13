interface String {
  customIncludes(searchString: string, position?: number): boolean;
}

String.prototype.customIncludes = function (searchString: string, position?: number) {
  if (!position) position = 0;
  return this.indexOf(searchString, position) !== -1;
};
