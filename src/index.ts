function solve(a: number[] = []): number {
    let x: number = 0;
    let pn: number = Number.MAX_VALUE;

    while (true) {
        let r: number = 0;

        a.forEach((v, i) => {
            r += Math.abs(v - x);
        });

        if (pn <= r) {
            return x - 1;
        }
        pn = r;
        x++;
    }
}

const a01 = [2, 4, 7];
console.log(solve(a01)); // 4

console.log('________________________________');

const a02 = [2, 4, 7, 6];
console.log(solve(a02)); // 4

console.log('________________________________');

const a03 = [2, 4, 7, 6, 6];
console.log(solve(a03)); // 6

console.log('________________________________');

const a04 = [2, 4, 7, 6, 6, 8];
console.log(solve(a04)); // 6

console.log('________________________________');

