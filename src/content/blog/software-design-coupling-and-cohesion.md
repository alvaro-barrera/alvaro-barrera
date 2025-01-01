---
author: Álvaro Barrera
pubDatetime: 2024-08-24T15:22:00Z
modDatetime: 2024-08-24T15:22:00Z
title: >-
  Diseño de Software: Acoplamiento y Cohesión
slug: disenio-de-software-acoplamiento-y-cohesion
featured: false
draft: false
tags:
  - diseño de software
  - acoplamiento y cohesión
description: Bajo acoplamiento y alta cohesión optimizan el diseño de software
order: 5
---

## Tabla de contenido

<!-- toc -->

## Introducción

Cuando un componente o módulo depende fuertemente de otro, se dice que están altamente acoplados. Para que nuestros módulos sean fácilmente integrables con otros, es fundamental buscar un bajo acoplamiento.

## Evaluación del Acoplamiento

Para evaluar el acoplamiento, debemos considerar tanto la cantidad de conexiones como la complejidad de estas interacciones. Un bajo acoplamiento implica que los módulos son independientes y flexibles, facilitando la implementación y los cambios. Esto significa que si las reglas de negocio requieren reemplazar o modificar componentes, el impacto será mínimo.

Aunque el acoplamiento se refiere a las interacciones externas entre módulos, el concepto de cohesión se enfoca en el comportamiento interno de un componente. La cohesión mide qué tan bien definido está el propósito y la responsabilidad de un componente.

## Cohesión Alta vs. Cohesión Baja

Una alta cohesión indica que un componente tiene un propósito claro y bien definido, y que todas sus responsabilidades están alineadas. Por el contrario, un componente con baja cohesión tiene múltiples responsabilidades no relacionadas, lo que puede indicar la necesidad de dividirlo en varios componentes más específicos.

Al identificar una baja cohesión, es probable que podamos refactorizar el componente para mejorar su diseño, dividiendo sus responsabilidades en componentes más especializados y manejables".

## La cohesión en función al acoplamiento

De acuerdo con el Principio de Responsabilidad Única (SRP), una clase debe tener una única razón para cambiar. Al extender este principios a los paquetes de software, estos deberían agrupar clases que respondan a las mismas razones de cambio.

Para evitar la propagación de cambios en lugares no previstos, es fundamental mantener juntos aquellos elementos (clases/métodos/líneas de código) que comparten la misma naturaleza de cambio. Así, la cohesión de un elemento aumenta en la medida en que sus subelementos estén fuertemente relacionados entre sí (internamente acoplados) y dependan menos de elementos externos (clases/paquetes/contextos).

Por lo que, un componente será más cohesivo cuanto más acoplados estén sus componentes internos y menos dependa de componentes externos.

```plaintext
  +-------------------------+       +-----------------------+
  |     Componente A        |       |     Componente B      |
  |  +-----------------+    |       |  +-----------------+  |
  |  |  Sub-Elemento 1 | +  |       |  |  Sub-Elemento 1 |  |
  |  +-----------------+ |  |       |  +-----------------+  |
  |      |         ^     |  |       |      |         ^      |      
  |      v         |     |  |       |      v         |      |
  |  +-----------------+ |  |       |  +-----------------+  |
  |  |  Sub-Elemento 2 | |  |       |  |  Sub-Elemento 2 |  |
  |  +-----------------+ |  |       |  +-----------------+  |
  |      |         ^     |  |       |      |         ^      |      
  |      v         |     |  |       |      v         |      |
  |  +-----------------+ |  |       |  +-----------------+  |
  |  |  Sub-Elemento 3 | +  |       |  |  Sub-Elemento 3 |  |
  |  +-----------------+    |       |  +-----------------+  |
  +-------------------------+       +-----------------------+
              ^                              ^
              |                              |
              +------------------------------+
                      Bajo acoplamiento
```
