basic.forever(function () {
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Forever)
    music.setVolume(19)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.clearScreen()
    basic.pause(1000)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showIcon(IconNames.Heart)
})
