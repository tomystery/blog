// var getMax = function(n) {
//     const dp = [];
//     dp[2] = 1;
//     dp[3] = 2;
//     dp[4] = 4;
//     dp[5] = 6;
//     dp[6] = 9;
//     for(let i = 4; i <= n ; i++){
//         dp[i] = dp[i - 3] * 3;
//     }
//     return dp[n];
// };


function getInter(n) {
    const dp = [];
    dp[2] = [1,1];
    dp[3] = [1,2];
    dp[4] = [2,2];
    dp[5] = [2,3];
    dp[6] = [3,3];
    for(let i = 7; i <= n ; i++){
        dp[i] = [...dp[i - 3],3];
    }
    return dp[n];
};
console.log(getInter(100));

//n => 


/* 2 = 1
3 = 1+2 = 2;
4 = 2+2 = 4
5 = 2+3 = 6;
6 = 3+3 = 9 
7 = 4+3 = 12
8 = 3+5 =15
9 = 3+6 = 18  3 + 3 + 3 = 27
10 = 3+7 = 21  3 X 3 X 4 

*/ 


