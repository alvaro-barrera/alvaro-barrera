---
author: Álvaro Barrera
pubDatetime: 2024-12-10T15:22:00Z
modDatetime: 2024-12-10T15:22:00Z
title: >-
  Complejidad del Software: Disciplinas en el Proceso de Desarrollo
slug: complejidad-del-software-disciplinas-en-el-desarrollo
featured: false
draft: false
tags:
  - diseño de software
  - desarrollo de software
  - fases del desarrollo de software
description: >-
  Fases o disciplinas del desarrollo de software: Requisitos, Análisis, Diseño, Implementación, Pruebas y Despliegue, cada una con sus retos y problemas específicos
---

## Tabla de contenido

<!-- toc -->

## Introducción

El desarrollo de software es un proceso complejo que involucra diversas fases, cada una con sus propios retos y dificultades. La complejidad del software está influenciada por diferentes factores en cada etapa del ciclo de vida del proyecto. A continuación, se identifican y explican las fases clave del desarrollo de software, abordando las complejidades específicas que se presentan en cada una de ellas.

## 1. Disciplina de Requisitos

### Objetivo

<p>La fase de requisitos es fundamental, ya que sienta las bases para el ámbito técnico, costos y tiempos. Llegar a un acuerdo entre los clientes, usuarios e ingenieros al describir correctamente las necesidades y límites del sistema.</p>

### Problemas

<ul><li><strong>Complejidad del dominio del problema</strong>: Entender y modelar el dominio del problema puede ser intrincado, especialmente si el problema es complejo o poco conocido. Esto puede dificultar la identificación de las necesidades del sistema.</li><li><strong>Ambigüedad en los requisitos</strong>: Los requisitos a menudo son vagos o poco claros, lo que complica su interpretación y genera incertidumbre sobre lo que realmente se necesita en el sistema.</li><li><strong>Cambios frecuentes</strong>: A lo largo del desarrollo, los requisitos pueden evolucionar debido a nuevas necesidades del negocio o a la retroalimentación de los usuarios. Estos cambios pueden afectar la dirección del proyecto y la implementación de funcionalidades.</li></ul>

## 2. Disciplina de Análisis

### Objetivo

<p>La fase de análisis tiene como objetivo descomponer el problema y entender cómo resolverlo. Describe los requisitos de una manera sencilla, usando un lenguaje cercano al desarrollo, y es una etapa cercana al diseño.</p>

### Problemas

<ul><li><strong>Limitaciones cognitivas humanas</strong>: El ser humano tiene una capacidad limitada para procesar grandes volúmenes de información y tomar decisiones en base a ella. Esto puede afectar la precisión y efectividad del análisis.</li><li><strong>Síntesis de los requisitos</strong>: Traducir los requisitos del dominio del problema en un formato comprensible y manejable es una tarea crítica. Esta síntesis debe ser precisa para garantizar que el software resultante cumpla con las expectativas y necesidades del negocio.</li></ul>

## 3. Disciplina de Diseño

### Objetivo

<p>El diseño es la fase donde se comienza a estructurar la solución, presentando un enfoque en los requisitos no funcionales y preparando la implementación. En esta etapa, entran en juego las tecnologías a utilizar.</p>

### Problemas

<ul><li><strong>Falta de claridad en estándares de desarrollo</strong>: En algunos casos, puede haber una carencia de directrices claras sobre cómo estructurar el sistema o resolver problemas específicos. Esto puede llevar a decisiones de diseño inconsistentes o difíciles de mantener.</li><li><strong>Búsqueda de flexibilidad</strong>: El diseño debe considerar la flexibilidad del sistema para adaptarse a cambios imprevistos en el futuro. Esto es esencial para garantizar la sostenibilidad del sistema a largo plazo, pero a la vez puede hacer el diseño más complejo.</li></ul>

## 4. Disciplina de Implementación

### Objetivo

<p>Implementar el sistema en componentes, organizar el código, definir clases, realizar pruebas unitarias e integrar las implementaciones individuales en un único sistema.</p>

### Problemas

<ul><li><strong>Errores en la gestión del código</strong>: La falta de control de versiones o conflictos de código con el avance de otros equipos, pueden generar fallos durante la implementación y comprometer la calidad del producto final.</li><li><strong>Divergencia entre el diseño y la implementación</strong>: A veces puede haber discrepancias entre el diseño inicial y lo que se implementa a posteriori, debido a limitaciones técnicas, falta de comunicación o incorrecta interpretación del diseño.</li></ul>

## 5. Disciplina de Pruebas

### Objetivo

<p>La fase de pruebas es crucial para asegurar la calidad del software. Aquí se comprueba el resultado de la implementación, se documentan fallos y se gestiona la calidad de los requisitos implementados.</p>

### Problemas

<ul><li><strong>Dificultad en el seguimiento del estado del sistema</strong>: En sistemas complejos, monitorear y rastrear el estado actual del sistema puede ser un desafío, ya que múltiples componentes interactúan entre sí y el estado puede cambiar constantemente.</li><li><strong>Exponencialidad en el comportamiento</strong>: Los sistemas discretos tienden a comportarse de manera no lineal, lo que significa que la cantidad de posibles interacciones y resultados aumenta exponencialmente con el crecimiento del sistema. Esto puede hacer que las pruebas sean cada vez más complicadas a medida que el software se expande.</li></ul>

## 6. Disciplina de Despliegue

### Objetivo

<p>El despliegue es el proceso de poner el sistema en producción, permitiendo a los usuarios la explotación del sistema.</p>

### Problemas

<ul><li><strong>Complejidad en la integración del sistema</strong>: Integrar y desplegar todos los componentes del sistema puede resultar desafiante, especialmente si estos provienen de diferentes entornos o tecnologías. La falta de compatibilidad entre componentes puede generar problemas.</li><li><strong>Manejo de dependencias y versiones</strong>: Es fundamental garantizar que todas las dependencias estén correctamente gestionadas y que las versiones del sistema sean consistentes a través de diferentes entornos de producción. Un error en la gestión de versiones puede causar fallos en el sistema.</li><li><strong>Problemas de escalabilidad y rendimiento</strong>: El sistema debe ser capaz de manejar una carga creciente a medida que crece la cantidad de usuarios o el volumen de datos. Si no se ha diseñado adecuadamente para ser escalable, el rendimiento del sistema puede verse afectado a medida que aumenta la carga.</li></ul>
