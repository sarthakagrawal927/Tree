
#include "classes.h"

node *newUser(string s)
{
    details *newDetails = new details(s);
    node *start = new node(newDetails);
    return start;
}

relation *makeNewRelation(int id1, int id2, string s)
{
    relation *newRelation = new relation(id1, id2, s);
    return newRelation;
}

int main()
{
    node *user1 = newUser("Priti");
    node *user2 = newUser("Praveen");
    node *user3 = newUser("Sarthak");
    node *user4 = newUser("Chinu");

    relation *newRelation = makeNewRelation(user1->id, user2->id, "12.9.2");
    newRelation->addKid(user3->id);
    newRelation->addKid(user4->id);

    // newRelation->print();
    user3->print();
}