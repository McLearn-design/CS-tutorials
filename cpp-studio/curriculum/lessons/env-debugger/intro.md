# Your first crash, and the debugger

Some bugs can't be found by the compiler — they only appear while the program runs. When that happens, beginners
add `std::cout` lines and guess. Engineers use a **debugger**: a tool that runs your program under its control,
lets you pause it on any line, and shows you every variable's real value at that moment.

This lesson hands you a program that crashes. Don't fix it by reading the code — find the bug with the debugger first.
That habit will save you hundreds of hours.

You'll meet a **pointer** here: a variable that holds the *address* of another object. `Item*` means
"address of an Item", `&item` takes an object's address, `item->quantity` means "the `quantity` of the object at this address",
and `nullptr` is a special address meaning "nothing". The memory track covers pointers in depth — for now that's all you need.
