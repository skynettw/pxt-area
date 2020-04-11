enum numOption {
    //% block="rounding"
    round,
    //% block="float"
    float
}

//% weight=100 color=#0fbc11 icon="\uf042" block="Area"
namespace area {
    //% blockId="showArea" block="Translate:area:%n|option:%myopt"
    //% value.min=1 value.max=20 value.defl=8
    export function showArea(value: number, myopt: numOption): void {
        if (myopt == numOption.round) {
            basic.showNumber(Math.round(value * 0.3025));
        } else {
            basic.showNumber(value * 0.3025);
        }

    }

    //% blockID="getArea" block="Return the translated area: area:%n|option:%myopt"
    export function getArea(value: number, myopt: numOption): number {
        let ret = 0;
        if (myopt == numOption.round) {
            ret = Math.round(value * 0.3025)
        } else {
            ret = value * 0.3025;
        }
        return ret;
    }
}
