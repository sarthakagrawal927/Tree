#include <string>
#include <ctime>
#include <unistd.h>
using namespace std;

int unique_id = 1;
int gen_random()
{
    return unique_id++;
}
