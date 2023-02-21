declare global {
  interface String {
    capitalize(): string;
  }
}

String.prototype.capitalize = function () {
  const strArr = this.split(' ');
  return strArr
    .map((subStr) => subStr.charAt(0).toUpperCase() + subStr.slice(1))
    .join(' ');
};

export {};
