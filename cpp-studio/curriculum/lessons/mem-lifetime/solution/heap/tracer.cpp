#include <iostream>
#include <string>
#include <utility>

// A Tracer announces when it is created and when it is destroyed.
struct Tracer {
    std::string name;

    // Constructor: runs when a Tracer comes into existence.
    explicit Tracer(std::string n) : name(std::move(n)) { std::cout << "construct " << name << '\n'; }

    // Destructor: runs automatically when a Tracer's lifetime ends.
    ~Tracer() { std::cout << "destroy " << name << '\n'; }
};

Tracer global("global");

void f()
{
    Tracer local("f-local");
}

int main()
{
    std::cout << "main starts\n";
    Tracer a("a");
    {
        Tracer b("b");
        f();
    }
    Tracer c("c");
    Tracer* h = new Tracer("heap");
    std::cout << "using " << h->name << '\n';
    delete h;
    std::cout << "main ends\n";
    return 0;
}
