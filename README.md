
# DUNGEON MAKER

Juego de estrategia donde deberás adentrarte en una mazmorra para alcanzar el tesoro.

## Tabla de Contenido

* [Modalidades](#Modalidades)
* [Mazmorra](#Mazmorra)
  * [Valor](#Valor)
  * [Tope de Acciones](#Tope-de-Acciones)
  * [Tope de Monedas](#Tope-de-Monedas)
* [Jugador](#Jugador)
  * [Monedas](#Monedas)
  * [Personaje](#Personaje)

# Modalidades

## Cazando tesoros

Esta es la modalidad donde el jugador tendrá que explorar y poner a prueba su astucia para resolver las dificultades de las mazmorras.

## Resguardando tesoros

Aquí el jugador podrá retar a los aventureros creando mazmorras desafiantes.

# Mazmorra

La mazmorra es el escenario donde se pondrán a prueba los jugadores para conseguir llevarse el tesoro.

## Valor

El valor de la mazmorra aumenta según el tope de monedas, tope de acciones, cantidad de recursos utilizados para crear la mazmorra y cantidad de jugadores que perdieron en dicha mazmorra, a mayor valor mayor recompensa obtendrá el jugador al superar la mazmorra. Cada vez que un jugador supere la mazmorra el valor bajara.

## Tope de Monedas

Cada mazmorra impondrá un tope máximo de monedas a gastar para cada intento, estas monedas a su vez serán usada por el jugador para comprar los personajes que usará en dicho intento.

## Tope de Acciones

La mazmorra posee un tope máximo de acciones para que el jugador supere la mazmorra.

# Jugador

## Monedas

Las monedas son el recurso del jugador para comprar personajes antes de intentar realizar una mazmorra.

Posibles ideas:

* Pagar antes de entrar a una mazmorra.
* Pagar monedas por en cada intento (y que las gane el creador de la mazmorra).

# Juego

El juego consiste en que el jugador logre llevar al menos uno de sus personajes al cofre de la mazmorra.

* Si el jugador supera el máximo de acciones pierde.
* Si todos los personajes mueren el jugador pierde.

## Personajes

Todos los personajes poseen en común que como estadísticas solo poseen salud y daño. A su vez la diferencia entre los personajes serán los rango y patrones de ataque.

Posibles ideas:

* Que existan personajes con movimientos distintos.
* Que cada personaje posea una habilidad especial.

|  Nombre  | Salud | Daño |  Patrón Ataque |
|----------|------|--------|----------------|
| Guerrero |   5  |   2    |[Ver](#Guerrero)|
| Arquero  |   4  |   4    |[Ver](#Arquero) |
|  Mago    |   3  |   5    |  [Ver](#Mago)  |

## Patrones de Ataque

### Guerrero

    +---+---+---+
    | o | o | o |
    +---+---+---+
    | o | x | o |
    +---+---+---+
    | o | o | o |
    +---+---+---+

    Cualquier casilla alrededor.
    Distancia: 1

### Arquero

    +---+---+---+---+---+
    | o |   | o |   | o |
    +---+---+---+---+---+
    |   |   |   |   |   |
    +---+---+---+---+---+
    | o |   | x |   | o |
    +---+---+---+---+---+
    |   |   |   |   |   |
    +---+---+---+---+---+
    | o |   | o |   | o |
    +---+---+---+---+---+

    Mas de una casilla de separación.
    Distancia: Infinito

### Mago

    +---+---+---+---+---+---+---+
    |   | o | o | o | o | o |   |
    +---+---+---+---+---+---+---+
    | o | o | o | o | o | o | o |
    +---+---+---+---+---+---+---+
    | o | o |   |   |   | o | o |
    +---+---+---+---+---+---+---+
    | o | o |   | x |   | o | o |
    +---+---+---+---+---+---+---+
    | o | o |   |   |   | o | o |
    +---+---+---+---+---+---+---+
    | o | o | o | o | o | o | o |
    +---+---+---+---+---+---+---+
    |   | o | o | o | o | o |   |
    +---+---+---+---+---+---+---+

    Mas de una casilla de separación.
    Distancia: 2.


# Mazmorra de ejemplo

    =====================
    |          t      C |
    |/ -|    ============
    |   |         e   e |
    |   =============   |
    | E           i     |
    |    ================
    |             E |
    =============   |
    | x             |
    =================

    |  = Pared
    =  = Pared
    /  = Puerta
    i  = Interruptor abre puerta
    E  = enemigo grande -2 salud
    e  = enemigo pequeño -1 salud
    t  = trampa -1 salud

