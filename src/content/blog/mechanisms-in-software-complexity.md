---
author: Álvaro Barrera
pubDatetime: 2024-11-23T15:22:00Z
modDatetime: 2024-11-23T15:22:00Z
title: >-
  Complejidad del Software: Mecanismos Fundamentales
slug: mecanismos-en-la-complejidad-del-software
featured: false
draft: false
tags:
  - diseño de software
  - complejidad del software
description: >-
  Mecanismos para la gestión de la complejidad del software: Abstracción, Encapsulación, Modularidad y Jerarquía
---

## Tabla de contenido

<!-- toc -->

## Introducción

En la mayoría de los casos, la naturaleza del software es compleja, ya que está influenciada tanto por el entorno tecnológico como por el contexto de negocio. Este entorno se describe en los requisitos y la arquitectura, pero también, la interacción entre los elementos del sistema y el diseño, contribuyen a su complejidad.

Sin embargo, contamos con cuatro mecanismos fundamentales que nos facilitan este proceso:

<ul><li>Abstracción</li><li>Encapsulación</li><li>Modularidad</li><li>Jerarquía</li></ul>

## <b>Abstracción</b>

La abstracción consiste en simplificar y representar los aspectos esenciales de un sistema, omitiendo detalles menos relevantes (al menos por el momento).

Este proceso surge de la necesidad de enfocarnos en los aspectos más importantes para el contexto actual, dejando de lado la información no relevante y resaltando las características comunes de los modelos que representan la realidad.

### Intención

La abstracción busca identificar características comunes entre objetos, delimitando responsabilidades y comportamientos, dentro del dominio de un problema.

Este proceso es subjetivo, ya que depende de la perspectiva del observador y del contexto en el que se aplique.

## <b>Encapsulación</b>

La encapsulación consiste en ocultar los detalles internos de una abstracción, los cuales no son necesarios para funcionamiento externo, protegiendo así su estado y asegurando que solo se acceda a ella de forma controlada.

### Intención

La encapsulación permite modificar las implementaciones internas sin afectar a los elementos que dependen de ellas, lo que facilita el mantenimiento del sistema y la mejora de su flexibilidad sin comprometer la seguridad o integridad de los datos.

## <b>Modularidad</b>

La modularidad es el proceso mediante el cual se descompone un sistema en partes más pequeñas y manejables, con bajo acoplamiento y alta cohesión.

### Intención

La modularidad permite dividir la complejidad del software en componentes comprensibles y autónomos.

Esto no solo facilita la comprensión del sistema, sino que también permite actualizar o modificar las partes sin afectar el comportamiento global del sistema. Los módulos son diseñados para ser independientes entre sí, pero con una fuerte cohesión interna en sus responsabilidades.

## <b>Jerarquía</b>

La jerarquía es la clasificación y organización estructurada de las abstracciones, distribuyéndolas en diferentes niveles. Estos niveles pueden ser determinados por diversos factores, como la responsabilidad, el comportamiento, la composición, etc...

Nos sirven para organizar los elementos de un sistema, de manera que su comprensión y mantenimiento sean más eficientes.

### Intención

La jerarquización de abstracciones mejora la comprensión del problema, estructurando la información en niveles. Dentro de cada nivel, los objetos tienden a colaborar entre sí, lo que reduce la complejidad.

En muchos sistemas complejos, no existe una única estructura jerárquica, sino que pueden coexistir varias jerarquías adaptadas a distintos aspectos del problema.
