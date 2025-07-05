function 左回転 () {
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P13, スピード)
    pins.analogWritePin(AnalogPin.P15, スピード)
    pins.analogWritePin(AnalogPin.P16, 0)
}
input.onButtonPressed(Button.A, function () {
    電源 = 1
})
function バック () {
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P13, スピード)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, スピード)
}
function 距離を測る () {
    距離 = 0
    while (距離 == 0) {
        距離 = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P1,
        PingUnit.Centimeters
        )
    }
    led.plotBarGraph(
    距離,
    300,
    true
    )
    return 距離
}
function 前進 () {
    pins.analogWritePin(AnalogPin.P12, スピード)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P15, スピード)
    pins.analogWritePin(AnalogPin.P16, 0)
}
function 右回転 () {
    pins.analogWritePin(AnalogPin.P12, スピード)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, スピード)
}
input.onButtonPressed(Button.B, function () {
    電源 = 0
})
function 停止 () {
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
}
let 距離 = 0
let スピード = 0
let 電源 = 0
電源 = 0
スピード = 256
停止()
basic.forever(function () {
    while (電源 == 1) {
        前進()
        basic.pause(200)
        while (距離を測る() < 15) {
            右回転()
            basic.pause(200)
        }
    }
    停止()
})
