// 在1和0构成的地图，1表示围墙，0表示路面，请实现一个函数判断一个地图，是否可以从地图的左侧走到右侧

const mapA = [
  [1, 0, 1, 0],
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
]

// true

const mapB = [
  [1, 1, 1, 0],
  [1, 0, 1, 0],
  [1, 0, 1, 0],
  [0, 0, 0, 1],
  [1, 0, 1, 0],
  [1, 0, 1, 0],
]

// false

const mapC = [
  [1, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 0],
  [1, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0, 1, 0],
  [1, 0, 0, 0, 1, 0, 0],
]

/**
 *
 * @param {Array<Array<number>>} map
 */
function fn(map) {
  // 存储当前索引
  let currIndex = []
  let allIndex = []
  // 当前进行的步数
  let stepNumber = 0
  let result = false
  const rowLength = map.length //行
  const columnLength = map[0].length //列

  while (true) {
    if (stepNumber === 0) {
      // 判断第一列中是否有路面通往第二列,并记录索引
      currIndex = map.reduce((prev, [num, num1], i) => {
        if (num === 0 && num1 === 0) {
          prev.push({ row: i, column: 1, filter: 'left' })
        }
        return prev
      }, [])
      console.log("currIndex:",currIndex)
    } else {
      // 根据第一列中可通的路面,在判断 `上` `右` `下` 三个方位是否有路面,并更新前进索引
      currIndex = currIndex.reduce((prev, curr) => {
        // 判断上方是否有路面
        if (
          curr.row > 0 &&
          curr.filter !== 'up' &&
          map[curr.row - 1][curr.column] === 0
        ) {
          prev.push({
            row: curr.row - 1,
            column: curr.column,
            filter: 'down',
          })
        }

        // 判断下方是否有路面
        if (
          curr.row < rowLength - 1 &&
          curr.filter !== 'down' &&
          map[curr.row + 1][curr.column] === 0
        ) {
          prev.push({ row: curr.row + 1, column: curr.column, filter: 'up' })
        }

        // 判断右边是否有路面
        if (
          curr.column < columnLength - 1 &&
          curr.filter !== 'right' &&
          map[curr.row][curr.column + 1] === 0
        ) {
          prev.push({ row: curr.row, column: curr.column + 1, filter: 'left' })
        }
        // 判断左边是否有路面
        if (
          curr.column > 0 &&
          curr.filter !== 'left' &&
          map[curr.row][curr.column - 1] === 0
        ) {
          prev.push({ row: curr.row, column: curr.column - 1, filter: 'right' })
        }
        debugger
        return prev
      }, [])
    }

    // 记录所有经过的点,防止重复经过造成死循环
    currIndex = currIndex.filter(
      ({ row, column }) =>
        !allIndex.find((index) => index.row === row && index.column === column),
    )
    allIndex = allIndex.concat(currIndex)

    // 判断是否已到最右侧
    if (currIndex.find(({ column }) => column === columnLength - 1)) {
      result = true
      break
    }

    // 判断是否还有可探测的路面,如果没有,说明从左边开始,所有可通的路面都已探测完,并且没有任何路能通往最右侧
    if (currIndex.length === 0) {
      break
    }
    stepNumber++
  }

  return result
}

fn(mapA)
