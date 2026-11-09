
from microbit import *
import random

jugador = 2
x = random.randint(0, 4)
y = 0
puntos = 0
velocidad = 400

while True:

    if button_a.was_pressed():
        jugador = max(0, jugador - 1)

if button_b.was_pressed():
    jugador = min(4, jugador + 1)

display.clear()
display.set_pixel(jugador, 4, 9)
display.set_pixel(x, y, 5)

sleep(velocidad)

y += 1

if y > 4:
    puntos += 1
x = random.randint(0, 4)
y = 0
velocidad = max(100, velocidad - 10)

if y == 4 and x == jugador:
display.clear()
display.show(Image.SAD)
sleep(1000)
display.scroll("PUNTOS:")
display.scroll(str(puntos))
break
