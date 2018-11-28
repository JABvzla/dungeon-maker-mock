
# DUNGEON MAKER

Juego de estrategia donde deberás adentrarte en una mazmorra para alcanzar el tesoro.

## Tabla de Contenido

- [DUNGEON MAKER](#dungeon-maker)
  - [Tabla de Contenido](#tabla-de-contenido)
- [Modalidades](#modalidades)
  - [Cazando tesoros](#cazando-tesoros)
  - [Resguardando tesoros](#resguardando-tesoros)
- [Mazmorra](#mazmorra)
  - [Valor](#valor)
  - [Tope de Monedas](#tope-de-monedas)
  - [Tope de Acciones](#tope-de-acciones)
- [Jugador](#jugador)
  - [Monedas](#monedas)
- [Juego](#juego)
  - [Personajes](#personajes)
    - [Guerrero](#guerrero)
    - [Arquero](#arquero)
    - [Mago](#mago)
  - [Enemigos](#enemigos)
    - [Orco](#orco)
    - [Golbin](#golbin)
    - [Trampas](#trampas)
  - [Interruptores](#interruptores)
- [Mazmorra Ejemplo](#mazmorra-ejemplo)
  - [Empezamos](#empezamos)
    - [Alternativa 1](#alternativa-1)
    - [Alternativa 2](#alternativa-2)

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

- Pagar antes de entrar a una mazmorra.
- Pagar monedas por en cada intento (y que las gane el creador de la mazmorra).

# Juego

El juego consiste en que el jugador logre alcanzar el cofre con al menos uno de sus [personajes](#Personajes).

- Si el jugador supera el máximo de acciones pierde.
- Si todos los [personajes](#Personajes) mueren el jugador pierde.

## Personajes

Todos los personajes poseen como estadísticas salud, daño, precio y patrón de ataque.

Posibles ideas:

- Que existan personajes con movimientos distintos.
- Que cada personaje posea una habilidad especial.

|  Nombre  | Salud | Daño   | Precio |  Patrón de Ataque |
|:---------|:-----:|:------:|:------:|:--------------:|
| Guerrero |   5   |   2    |   1    |[Ver](#Guerrero)|
| Arquero  |   4   |   4    |   2    |[Ver](#Arquero) |
|  Mago    |   3   |   5    |   3    |  [Ver](#Mago)  |

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

## Enemigos

Los enemigos poseen como estadísticas salud, daño, patrón de ataque y patrón de agro.

|  Nombre  | Salud | Daño   |  Patrón de Ataque |  Patrón de Agro |
|:---------|:-----:|:------:|:-----------------:|:---------------:|
|   Orco   |   2   |   2    |    [Ver](#Orco)   |   [Ver](#Orco)  |
|  Golbin  |   1   |   1    |   [Ver](#Golbin)  |  [Ver](#Golbin) |

### Orco

![aporc](assets/attack-pattern-orc.png?raw=**true**)

### Golbin

![apgolbin](assets/attack-pattern-golbin.png?raw=**true**)

### Trampas

Las casillas con el símbolo (!) son casillas trampa las cuales te restaran -1 de salud al caminar sobre ellas.

## Interruptores

Una casilla con la letra i simboliza que la casilla es de tipo interruptor, lo que significa que activara el acceso a todas las casillas del mismo color.

Posibles ideas:

- Interruptores vuelvan a cerrar si se vuelve a caminar sobre ella.
- Interruptores que requieran accionar manualmente (que no se activen caminando).
- Que los interruptores se activen al tener un enemigo encima o un interruptor especifico con esta característica.
- Que se pueda usar los interruptores para activar/desactivar trampas.

# Mazmorra Ejemplo

En el siguiente ejemplo vamos a resolver la siguiente mazmorra en sus diferentes posibilidades.

![dungeon10](assets/dungeon-1.0.png?raw=**true**)

## Empezamos

![dungeon11](assets/dungeon-1.1.png?raw=true)

Nos acercamos a nuestro primer enemigo usando 3 PA (puntos de acción), lo atacamos y nos devuelve un golpe quitando 2 puntos de salud a nuestro guerrero, golpeamos nuevamente y logramos vencerlo.

Hasta ahora hemos usado 5 puntos de acción, tres en movimientos y dos en ataques.

Luego de vencer nuestro primer orco se despliegan dos alternativas.

### Alternativa 1

![dungeon11](assets/dungeon-1.2.png?raw=true)

    Total de PA: 24
    Personaje Victorioso: Guerrero 3 salud.

### Alternativa 2

![dungeon11](assets/dungeon-1.3.png?raw=true)

    Total de PA: 24
    Personaje Victorioso: Guerrero 1 salud.

La conclusión de este mapa es que ambas alternativas son igual de buenas debido a que la salud final no es una estadística que afecte el resultado del botín.