
# NX-302: Tiny Calculator

A small web project designed to **master JavaScript modules** while building a minimalist yet stylish calculator. The goal of this exercise is to practice **modular JavaScript architecture**, **DOM interaction**, and **clean UI design** using separate scripts for UI, logic, and operations.

The interface follows a modern **UX/UI design trend**, inspired by real-world calculators but reimagined for the web — simple, responsive, and comfortable to use.

---

## What is this project

**NX-302: Tiny Calculator** is a lightweight, fully client-side calculator app built to help you understand how to structure JavaScript code into **separate modules**.

Each module has a clear purpose:

* `ui.js` — Handles display and user interface updates.
* `calculator.js` — Manages the parsing and evaluation of mathematical expressions.
* `operations.js` — Contains reusable logic for basic arithmetic operations.
* `main.js` — Connects all modules together and manages user interactions.

The project focuses on **writing maintainable, modular, and reusable code**, while also applying clean front-end design principles.

---

## Features

* Perform basic calculations (+, −, ×, ÷).
* Modular structure: UI, logic, and operations are split into different files.
* Responsive and UX-friendly interface.
* Error handling: displays `"Syntax Error"` on invalid input.
* Keyboard support (optional).
* Smooth UI animations and modern look.
* Minimal dependencies — pure JavaScript and CSS.

---

## Usage

1. Open `index.html` in your browser.
2. Use the on-screen buttons or keyboard to type numbers and operations.
3. Click `=` to evaluate the expression.
4. Use `C` to clear the screen or `←` to delete the last character.

---

## How it works (high level)

* The **UI module** (`ui.js`) manages display updates and interactions.
* The **Calculator module** (`calculator.js`) interprets and calculates expressions using safe logic.
* The **Operations module** (`operations.js`) defines reusable arithmetic operations.
* The **Main module** (`app.js`) connects everything, handling button clicks and events.
* If the expression is invalid, `"Syntax Error"` appears instead of crashing.

---

## Files

* `index.html` — Main structure and interface of the calculator.
* `style.css` — Custom styles for a modern UX/UI experience.
* `ui.js` — Handles display updates and DOM manipulations.
* `calculator.js` — Core logic for evaluating expressions.
* `operations.js` — Mathematical functions and helpers.
* `app.js` — Entry point connecting modules.
* `README.md` — This file.

---

## Customization

* To restyle the calculator, edit `style.css`.
* To add scientific or advanced functions (like %, √, or sin/cos), expand `operations.js`.
* You can also animate the buttons or screen with CSS transitions or JS effects.

---

## Notes

This project is intentionally minimal, built for **learning and practicing JavaScript modularization**.
It’s part of the **NX Series**, where each project introduces a new programming concept in a practical way.

**NX-302** focuses on:

* Splitting code into independent modules.
* Writing clean, reusable logic.
* Improving front-end UX/UI.

---

Enjoy building, breaking, and mastering the modular side of JavaScript with **NX-302: Tiny Calculator** ⚙️
