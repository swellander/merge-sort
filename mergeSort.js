const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  else {
    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));
    let iR = 0;
    return left.reduce((sorted, curr, i) => {
      if (!right[iR]) {
        sorted.push(curr);
        return sorted;
      }
      while(curr >= right[iR]) {
        sorted.push(right[iR]);
        iR++;
      }
      sorted.push(curr);
      if (i === left.length - 1) sorted = sorted.concat(right.slice(iR));
      return sorted;
    }, []);
  }
}

module.exports = mergeSort;
