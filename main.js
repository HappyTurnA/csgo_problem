
let loopCount = 0;
let killCount = 0;
while(loopCount <= 10000000) {
    let hitCount = 0;
    for(let i = 0; i < 7; ++i) {
        let r = Math.random();
        if(r >= 0.5) {
            // 50%で命中
            if(r >= 0.8) {
                // 20%でHS(kill)
                hitCount = 3;
            } else {
                // それ以外は単HIT
                hitCount++;
            }
        } else {
            // はずれ
        }
    }
    loopCount++;
    if(hitCount >= 3) { // hit3 以上でキル判定
        killCount++;
    }
}
const killRatio = killCount / loopCount;
console.log(killRatio);