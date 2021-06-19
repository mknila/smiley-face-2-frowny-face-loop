/**
 * Plot the below set of positions on the LED and make it run in a loop
 * 
 * Set 1: (1,1) , (3,1) , (0,3) , (4,3) , (1,4) , (2,4) , (3,4)
 * 
 * Pause 500 ms
 * 
 * Set 2: (1,1) , (3,1) , (1,3) , (2,3) , (3,3) , (0,4) , (4,4)
 * 
 * See what image these LEDs create
 * 
 * Hint: you have to use clear screen after each set is plotted.
 */
basic.forever(function () {
    led.plot(1, 1)
    led.plot(3, 1)
    led.plot(0, 3)
    led.plot(4, 3)
    led.plot(1, 4)
    led.plot(2, 4)
    led.plot(3, 4)
    basic.pause(500)
    basic.clearScreen()
    led.plot(1, 1)
    led.plot(3, 1)
    led.plot(1, 3)
    led.plot(2, 3)
    led.plot(3, 3)
    led.plot(0, 4)
    led.plot(4, 4)
    basic.pause(500)
    basic.clearScreen()
})
