const mapA = [
  [1, 0, 1, 0],
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
];

function map(map) {
  let rows = map.length;
  let cols = map[0].length;
  let result = false; //返回是正确的还是错误的
  let allIndex = []; //我走过的
  let curIndex = []; //我现在走的

  let step = 0; //我走的步数
  while (true) {
    if (step === 0) {
      curIndex = map.reduce((prev, [row, col], i) => {
        console.log([row, col]);
        if (row === 0 && col === 0) {
          prev.push({ row: i, col: 1, filter: "left" });
        }
        return prev;
      }, []);
    } else {
      curIndex = curIndex.reduce((prev, { row, col, filter }) => {
        console.log("row,col,filter:", row, col, filter);

        //找出上面的有没有 row -1 ,col
        if (row>0 && map[row - 1][col] === 0 && filter !== "top") {
          //我当前这个元素是不是从上面下来的
          prev.push({ row: row - 1, col, filter: "bottom" });
        }

        //找出下面的有没有 row + 1 ,col
        if (row<rows-1 && map[row + 1][col] === 0 && filter !== "bottom") {
          prev.push({ row: row + 1, col, filter: "top" });
        }

        //找出左边有没有 row ，col-1,我自己是不是从左边来的
        if (col > 0 && map[row][col - 1] === 0 && filter !== "left") {
          prev.push({ row: row, col: col - 1, filter: "right" });
        }

        if (col<cols-1 && map[row][col + 1] === 0 && filter !== "right") {
          prev.push({ row: row, col: col + 1, filter: "left" });
        }
        return prev;
      }, []);
    }
    //排除走过的节点
    curIndex = curIndex.filter(({ row, col }) => {
     return !allIndex.find((item) => item.row === row && item.col === col);
    });
    //将走过的节点防止到allIndex
    allIndex = allIndex.concat(curIndex);

    // 判断是否已到最右侧
    if (curIndex.find(({ col }) => col === cols - 1)) {
      result = true;
      break;
    }

    //判断当前还有没有点
    if (curIndex.length === 0) {
      result = false;
      break;
    }
    step++;
  }
  return result;
}
console.log(map(mapA));
