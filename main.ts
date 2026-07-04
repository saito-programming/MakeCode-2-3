input.onButtonPressed(Button.A, function () {
    振った回数 = 0
    basic.showNumber(振った回数)
})
input.onGesture(Gesture.Shake, function () {
    振った回数 += 1
    basic.showNumber(振った回数)
})
input.onButtonPressed(Button.B, function () {
    振った回数 += -1
    basic.showNumber(振った回数)
})
let 振った回数 = 0
振った回数 = 0
