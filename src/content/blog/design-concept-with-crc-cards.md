---
author: Álvaro Barrera
pubDatetime: 2024-08-24T15:22:00Z
modDatetime: 2024-08-24T15:22:00Z
title: >-
  Diseño Conceptual con Tarjetas CRC: Ejemplos y Beneficios
slug: disenio-conceptual-con-tarjetas-crc
featured: false
draft: false
tags:
  - diseño de software
  - diseño conceptual de software
description: >-
  Uso de tarjetas CRC para organizar y visualizar el diseño conceptual
order: 4
---

## Tabla de contenido

<!-- toc -->

## Introducción

Cuando iniciamos el diseño conceptual, identificamos los componentes, sus relaciones y responsabilidades en el contexto del problema a resolver o el requisito a cumplir.

Una técnica útil para organizar el diseño conceptual es el uso de tarjetas CRC (Clase, Responsabilidad, Colaborador). Estas tarjetas ayudan a identificar los componentes como clases, sus responsabilidades y las colaboraciones o conexiones entre ellas.

Cada tarjeta CRC consta de tres partes: el nombre de la clase, sus responsabilidades y los colaboradores (otras clases) con las que interactúa para cumplir dichas responsabilidades.

## Ejemplo de Tarjeta CRC para la Clase Venta

<div class="scroll">
  <table>
    <thead>
      <tr>
        <th>Clase</th>
        <th>Responsabilidades</th>
        <th>Colaboradores</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Venta</td>
        <td>
          - Registrar la venta.<br />- Calcular el total.<br />- Generar recibo.
        </td>
        <td>Producto, Cliente, Recibo</td>
      </tr>
    </tbody>
  </table>
</div>

## Tarjeta CRC para la Clase Producto

<div class="scroll">
  <table>
    <thead>
      <tr>
        <th>Clase</th>
        <th>Responsabilidades</th>
        <th>Colaboradores</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Producto</td>
        <td>
          - Almacenar información del producto.<br />- Calcular el precio.
        </td>
        <td>Venta, Inventario</td>
      </tr>
    </tbody>
  </table>
</div>

## Tarjeta CRC para la Clase Cliente

<div class="scroll">
  <table>
    <thead>
      <tr>
        <th>Clase</th>
        <th>Responsabilidades</th>
        <th>Colaboradores</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cliente</td>
        <td>
          - Registrar datos del cliente.<br />- Verificar historial de compras.
        </td>
        <td>Venta, HistorialCompras</td>
      </tr>
    </tbody>
  </table>
</div>

## Tarjeta CRC para la Clase Recibo

<div class="scroll">
  <table>
    <thead>
      <tr>
        <th>Clase</th>
        <th>Responsabilidades</th>
        <th>Colaboradores</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Recibo</td>
        <td>- Generar el recibo de la venta.<br />- Imprimir recibo.</td>
        <td>Venta</td>
      </tr>
    </tbody>
  </table>
</div>

## Visualización de Relaciones

<div class="scroll">
  <div class="diagram">
    <div class="line">Cliente -----------|> Venta <----------- Producto</div>
    <div class="line">| |</div>
    <div class="line">| |</div>
    <div class="line">HistorialCompras Inventario</div>
    <div class="line">|</div>
    <div class="line">|</div>
    <div class="line">Recibo</div>
  </div>
</div>

## Conclusión

El principal beneficio de usar estas tarjetas es que permiten dividir las clases
en componentes más manejables, facilitando la comprensión del prototipo de
diseño. En el ejemplo anterior, podemos visualizar cómo se relaciona la clase
Venta con las clases Producto, Cliente y Recibo, así como sus responsabilidades
y colaboraciones específicas. Esto nos ayuda a identificar deficiencias en el
diseño y simular cómo funcionan las clases en interacción.
