---
author: Álvaro Barrera
pubDatetime: 2024-12-31T21:06:00Z
modDatetime: 2024-12-31T21:06:00Z
title: >-
  Arquitectura de Software: Principios de Paquetes
slug: arquitectura-software-principios-paquetes
featured: false
draft: false
tags:
  - diseño de software
  - arquitectura de software
description: >-
  Pincipios de paquetes en arquitectura de software para la reutilización, el mantenimiento y la estabilidad
order: 7
---

## Tabla de contenido

<!-- toc -->

## Introducción

En la arquitectura de software, los paquetes se agrupan para ofrecer versionar el código de manera cohesiva y mantenible. Entender los principios de la organización y gestión de paquetes es fundamental para diseñar software escalable y mantenible.

## Principios de Paquetes

Los principios de paquetes se pueden clasificar en dos categorías: los asociados a la **cohesión** de paquetes y los asociados al **acoplamiento** de paquetes.

- Asociados a la cohesión de paquetes: Principio de Reutilización Común, Principio de Cierre Común, Principio de Equivalencia de Liberación / Reutilización, 
- Asociados al acoplamiento de paquetes: Principio de Dependencias Acíclicas, Principio de Dependencias Estables, Principio de Abstracciones Estables

### Principio de Reutilización Común

**Objetivo clave: Reusabilidad**

Este principio sostiene que las clases que están estrechamente relacionadas y tienen fines comunes deben agruparse en un mismo paquete. Así, se maximizan las oportunidades de reutilización, ya que todas las clases necesarias para un mismo propósito están disponibles en un solo paquete. Esto permite que los módulos sean más independientes y reutilizables en diferentes contextos.

### Principio de Cierre Común

**Objetivo clave: Mantenimiento**

Las clases dentro de un paquete deben estar cerradas para modificación pero abiertas para extensión (de acuerdo con el Principio de Abierto/Cerrado).

La finalidad es que los cambios realizados en un paquete no afecten a otros paquetes que no dependen de él. Asçi, los cambios de requisitos deben afectar solo a un número limitado de paquetes, facilitando el mantenimiento.

Además, se infiere que si muchas clases tienden a cambiar simultáneamente debido a una modificación en otra clase, todas ellas deben pertenecer al mismo paquete para que los cambios estén identificados y no requieran más cambios no deseadas en otros paquetes.

### Principio de Equivalencia de Liberación / Reutilización

El grado de granularidad para la reutilización de los componentes de software debe ser correspondiente a los paquetes gestionados por un sistema de control de versiones.

Esto permite que los paquetes sean tratados como productos entregables, donde los cambios y la complejidad interna de las clases son manejados de manera aislada, facilitando la reutilización sin afectar otros paquetes.

### Principio de Dependencias Acíclicas

Los paquetes contienen clases mantenidas por equipos de ingeniería. A menudo, algunos paquetes hacen uso de clases de otros paquetes, formando dependencias dirigidas. El problema surge cuando estas dependencias crean un ciclo, ejemplo:

- El paquete **A** tiene dependencias con los paquetes **B** y **C**.
- El paquete **B** tiene una dependencia con el paquete **E**.
- El paquete **C** tiene una dependencia con el paquete **E**.
- El paquete **E** tiene una dependencia con el paquete **A**.

Esto genera una estructura de **dependencia cíclica**, ya que existe una cadena de dependencias que forma un ciclo cerrado. El paquete **A** depende de los paquetes **B** y **C**, ambos dependen del paquete **E**, y a su vez, el paquete **E** depende del paquete **A**. 

Esto significa que un paquete termina dependiendo indirectamente de sí mismo, completando un ciclo en las dependencias.

```plaintext
       +---+
       | A |<----------+
       +---+           |
        / \            |
       /   \           |
      v     v          |
     +---+ +---+       |
     | B | | C |       |
     +---+ +---+       |
       |     |         |
       v     v         |
     +---+ +---+       |
     | E |-------------+
     +---+
```

Los ciclos hacen problemática la independencia entre módulos y complican el trabajo de ingeniería. Para resolver esto, se pueden romper las dependencias cíclicas utilizando el Principio de Inversión de Dependencias.

### Principio de Dependencias Estables

Según la RAE, _"estable"_ significa _"Que se mantiene sin peligro de cambiar, caer o desaparecer"_. En arquitectura de software, tomamos el concepto de estabilidad como la dificultad que tiene un módulo para cambiar.

Para medir la inestabilidad de un módulo, debemos considerar dos conceptos: 

- Acoplamiento eferente: el número de clases dentro de un paquete que dependen de clases de otros paquetes.
- Acoplamiento aferente: el número de clases de otros paquetes que dependen de clases dentro del paquete.

```
Inestabilidad = A. Eferente / (A. Aferente + A. Eferente)
```

### Principio de Abstracciones Estables

Los paquetes estables deben ser abstractos, ya que son más fáciles de extender. Los paquetes concretos, por el contrario, son difíciles de extender y por lo tanto, de modificar, lo que los hace menos estables. 

Para medir el nivel de abstracción de un paquete, usamos la siguiente fórmula:

```
Abstracción = Clases Abstractas / Clases Totales; Donde 0 <= Abstracción <= 1
```

## Conclusión

Los principios de paquetes son fundamentales para diseñar software modular, reutilizable y mantenible. Al aplicar estos principios, podemos mejorar la cohesión, reducir el acoplamiento y construir software más robusto y escalable.
