const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  else {
    const firstHalf = arr.slice(0, arr.length/2);
    const secondHalf = arr.slice(arr.length/2);
    const left = mergeSort(firstHalf);
    const right = mergeSort(secondHalf);
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
