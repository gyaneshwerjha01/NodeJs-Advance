# JavaScript

## How JavaScript executes the code - Behind the scene

### 1. The Parser (Turning Text into Structure)
* **Reading Code:** The engine reads your source code line by line to analyze the structure.
* **Tokenization:** The **Parser** breaks the code into "tokens"—small pieces like keywords, variables, and operators.
* **Abstract Syntax Tree (AST):** It then builds an AST, a tree-like structure that represents the logic of your code.



### 2. The Interpreter (Ignition)
* **Bytecode Conversion:** The V8 engine takes the AST and converts it into **Bytecode**.
* **Intermediate Logic:** Bytecode is an intermediate code that is not yet machine code, but it is easy for the engine to execute quickly.
* **Immediate Start:** The interpreter starts executing this bytecode immediately so your program starts without delay.

### 3. The JIT Compiler (TurboFan Optimization)
* **Profiling:** While the interpreter is running, a **Profiler** watches the code for "hot" areas.
* **Hot Code:** If a specific function is called many times, the **JIT Compiler** (specifically TurboFan in V8) kicks in.
* **Optimization:** It takes that "Hot Code" and compiles it directly into **Highly Optimized Machine Code** (binary) so it runs at maximum speed.
* **De-optimization:** If the code's behavior changes (e.g., a variable was always a number but suddenly becomes a string), the engine "De-optimizes" and goes back to the interpreter.



### 4. Direct Hardware Execution
* **CPU Interaction:** The **Machine Code** (binary 0s and 1s) is sent directly to your computer's **CPU**.
* **Native Performance:** Because this code is already optimized specifically for your hardware, it executes at near-native speeds.

---

## Datatypes, variables and constants in JavaScript
