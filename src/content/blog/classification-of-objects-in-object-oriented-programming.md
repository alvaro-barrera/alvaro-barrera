---
author: Álvaro Barrera
pubDatetime: 2024-08-24T15:22:00Z
modDatetime: 2024-08-24T15:22:00Z
title: Clasificación de Objetos en Programación Orientada a Objetos
slug: >-
  clasificacion-de-objetos-en-la-programacion-orientada-a-objetos
featured: false
draft: false
tags:
  - poo
  - modelado orientado a objetos
description: >-
  Clasificación y roles de objetos en POO: entidad, frontera y control
---

## Tabla de contenido

<!-- toc -->

## Introducción

En la programación orientada a objetos (POO), los tipos de objetos se pueden clasificar en tres categorías principales:

## Objetos de Entidad

Los objetos de entidad representan elementos del mundo real o conceptos que se modelan en el sistema, estos son la primera capa de abstracción al descomponer los objetos que conforman el sistema. Estos objetos suelen ser los más comunes y se utilizan para representar datos o información específica del dominio del problema. Por ejemplo, un objeto entidad ‘Vehículo’ podría tener atributos como marca, modelo, año, y kilometraje, y estaría sujeto a reglas de negocio relacionadas con el funcionamiento y la gestión de vehículos.

## Objetos de Frontera

Los objetos de frontera (también llamados objetos de interfaz, de presentación o límite) interactúan con el exterior del sistema, como usuarios, otros sistemas, o interfaces de red. Ejemplos incluyen formularios de entrada de datos, interfaces de usuario, y criterios de autenticación. Por ejemplo, un objeto de frontera podría ser un formulario de inicio de sesión donde los usuarios ingresan sus credenciales, y el sistema valida estos datos según ciertos requisitos de seguridad.

## Objetos de Control

Los objetos de control gestionan la lógica de flujo de los casos de uso o las interacciones dentro del sistema. Actúan como mediadores entre los objetos de entidad y los objetos de frontera, facilitando la comunicación y el procesamiento de datos. Ejemplos de objetos de control incluyen los ‘loaders’ (cargadores o barras de progreso) que indican el progreso de una tarea o  estado del mismo al usuario que interactúa con el sistema, y los botones que inician acciones específicas como guardar, eliminar o enviar. Además, estos objetos pueden manejar la coordinación de múltiples objetos de entidad para cumplir con un caso de uso."
