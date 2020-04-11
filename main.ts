enum numOption {
    //% block="四捨五入"
    round,
    //% block="保留小數"
    float
}
//% weight=100 color=#0fbc11 icon="\uf042" block="area translate"
namespace area {
    //% blockId="showArea" block="Translate:area:%n|option:%myopt"
    //% n.min=1 n.max=20 n.defl=8
    export function showArea(value: number, myopt: numOption): void {
        if (myopt == numOption.round) {
            basic.showNumber(Math.round(value * 0.3025));
        } else {
            basic.showNumber(value * 0.3025);
        }

    }

    //% blockID="getrea" block="Return the translated area: area:%n|opption:%myopt"
    export function area(value: number, myopt: numOption): number {
        let ret = 0;
        if (myopt == numOption.round) {
            ret = Math.round(value * 0.3025)
        } else {
            ret = value * 0.3025;
        }
        return ret;
    }
}
