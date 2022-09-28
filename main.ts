let N1 = 0
let N2 = 0
let N3 = 0
let mayor = 0
let menor = 0
input.onButtonPressed(Button.A, function () {
    if (N1 == 0 && N2 == 0) {
        basic.showIcon(IconNames.No)
    } else {
        if (N1 > N2 && N1 > N3) {
            mayor = N1
            if (N2 > N3) {
                menor = N3
                menor = N2
            }
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    N1 = randint(0, 9)
    N2 = randint(0, 9)
    N3 = randint(0, 9)
    if (N1 != N2 && (N2 != N3 && N1 != N3)) {
        basic.showIcon(IconNames.Yes)
        basic.showNumber(N1)
        basic.showNumber(N2)
        basic.showNumber(N3)
    } else {
        basic.showIcon(IconNames.No)
        N1 = 0
        N2 = 0
        N3 = 0
    }
})
