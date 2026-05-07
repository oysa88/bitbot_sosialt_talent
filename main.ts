radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        bitbot.rotate(BBRobotDirection.Left, fart / 2)
    } else if (receivedNumber == 2) {
        bitbot.rotate(BBRobotDirection.Right, fart / 2)
    } else if (receivedNumber == 3) {
        bitbot.go(BBDirection.Forward, fart)
    } else if (receivedNumber == 4) {
        bitbot.go(BBDirection.Reverse, fart)
    } else {
        bitbot.go(BBDirection.Forward, 0)
    }
})
let fart = 0
bitbot.ledRainbow(true, BBArms.Both)
let radioGruppe = 1
fart = 100
radio.setTransmitPower(7)
radio.setGroup(radioGruppe)
basic.showNumber(radioGruppe)
basic.clearScreen()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `,0)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `,0)
    } else if (input.rotation(Rotation.Pitch) < -25) {
        radio.sendNumber(3)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `,0)
    } else if (input.rotation(Rotation.Pitch) > 25) {
        radio.sendNumber(4)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `,0)
    } else {
        radio.sendNumber(0)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `,0)
    }
})
