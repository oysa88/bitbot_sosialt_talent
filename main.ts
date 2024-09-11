radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        bitbot.rotate(BBRobotDirection.Left, 40)
    } else if (receivedNumber == 2) {
        bitbot.rotate(BBRobotDirection.Right, 40)
    } else if (receivedNumber == 3) {
        bitbot.go(BBDirection.Forward, 80)
    } else if (receivedNumber == 4) {
        bitbot.go(BBDirection.Reverse, 80)
    } else {
        bitbot.go(BBDirection.Forward, 0)
    }
})
bitbot.ledRainbow(true, BBArms.Both)
let radioGruppe = 1
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
