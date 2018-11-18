
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
  * [Personajes](#Personajes)

# Modalidades

## Cazando tesoros

Esta es la modalidad donde el jugador tendrá que explorar y poner a prueba su astucia para resolver las dificultades de las mazmorras.

## Resguardando tesoros

Aquí el jugador podrá desafiar a los aventureros creando mazmorras.

# Mazmorra

La mazmorra es el escenario donde se pondrán a prueba los jugadores para intentar llevarse el tesoro.

## Valor

El valor de la mazmorra aumenta según el [tope de monedas](#Tope-de-Monedas), [tope de acciones](#Tope-de-Acciones), cantidad de recursos utilizados para crear la mazmorra y cantidad de jugadores que perdieron en dicha mazmorra, a mayor valor mayor recompensa obtendrá el jugador al superar la mazmorra. Cada vez que un jugador supere la mazmorra el valor bajara.

## Tope de Monedas

Cada mazmorra impondrá un tope máximo de [monedas](#Monedas) a gastar para cada intento, estas [monedas](#Monedas) a su vez serán usada por el jugador para comprar los [personajes](#Personajes) que usará en dicho intento.

## Tope de Acciones

La mazmorra posee un tope máximo de acciones para que el jugador supere la mazmorra.

# Jugador

## Monedas

Las monedas son el recurso del jugador para comprar [personajes](#Personajes) antes de intentar realizar una mazmorra.

Posibles ideas:

* Pagar antes de entrar a una mazmorra.
* Pagar monedas por en cada intento (y que las gane el creador de la mazmorra).

# Juego

El juego consiste en que el jugador logre alcanzar el cofre con al menos uno de sus [personajes](#Personajes).

* Si el jugador supera el máximo de acciones pierde.
* Si todos los [personajes](#Personajes) mueren el jugador pierde.

## Personajes

Todos los personajes poseen en común que como estadísticas solo poseen salud y daño. A su vez la diferencia entre los personajes serán los rango y patrones de ataque.

Posibles ideas:

* Que existan personajes con movimientos distintos.
* Que cada personaje posea una habilidad especial.

|  Nombre  | Salud | Daño   | Precio |  Patrón Ataque |
|:---------|:-----:|:------:|:------:|:--------------:|
| Guerrero |   5   |   2    |   1    |[Ver](#Guerrero)|
| Arquero  |   4   |   4    |   2    |[Ver](#Arquero) |
|  Mago    |   3   |   5    |   3    |  [Ver](#Mago)  |

## Patrones de Ataque

### Guerrero

![apwarrior](assets/attack-pattern-warrior.png?raw=**true**)

    Cualquier casilla alrededor.
    Distancia: 1

### Arquero

![aparcher](assets/attack-pattern-archer.png?raw=**true**)

    Mas de una casilla de separación.
    Distancia: Infinito

### Mago

![apwizzard](assets/attack-pattern-wizzard.png?raw=**true**)

    Mas de una casilla de separación.
    Distancia: 2.

# Mazmorra de ejemplo

En el siguiente ejemplo vamos a resolver la siguiente mazmorra en sus diferentes posibilidades.

![dungeon10](assets/dungeon-1.0.png?raw=**true**)

![dungeon11](assets/dungeon-1.1.png?raw=true)

![dungeon12](assets/dungeon-1.11.png?raw=true)