// 在1和0构成的地图，1表示围墙，0表示路面，请实现一个函数判断一个地图，是否可以从地图的左侧走到右侧

const mapA = [
  [1, 0, 1, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 0],
  [0, 0, 1, 0],
  [1, 0, 0, 0],
];

// true

const mapB = [
  [1, 1, 1, 0],
  [1, 0, 1, 0],
  [1, 0, 1, 0],
  [0, 0, 0, 1],
  [1, 0, 1, 0],
  [1, 0, 1, 0],
];

// false

function fn(map) {
  const rows = map.length; //几行
  const columns = map[0].length; //几列

  let used = []; //走过路的点

  let curPoints = []; //起始点

  let result = false;//假设结果是false

  //先判断从第一列到第二列有没有点的
  for (let i = 0; i < rows; i++) {
    if (map[i][0] === 0 && map[i][1] === 0) {
      curPoints.push([i,1]);
    }
  }


  function getCycle(pointArr) {
   pointArr.forEach(item => getCycle)
  }
  getCycle(curPoints)
}

fn(mapA);
