#include "randGen.h"
#include <vector>
#include <iostream>
#include <unordered_map>

class details
{
public:
    string name;
    int p1ID, p2ID, spouseID;
    vector<int> kidsID;

    details() {}
    details(string name1)
    {
        name = name1;
    }
};

unordered_map<int, details> all;

class relationshipDetails
{
public:
    string date;

    relationshipDetails() {}
    relationshipDetails(string date1)
    {
        date = date1;
    }
};

class node
{
public:
    details *detail = new details();
    int id;
    node(details *detail1)
    {
        detail->name = detail1->name;
        id = gen_random();
        all[id] = *detail;
    }

    void print()
    {
        cout << id;
        cout << detail->p2ID;
        cout << "Parents :" << all[detail->p1ID].name << " " << all[detail->p2ID].name << endl;
        cout << id << "\n"
             << endl;
    }
};

class relation
{
public:
    int sp1, sp2;
    string relationDetails;
    vector<int> kidsID;

    relation(int sp11, int sp21, string date)
    {
        sp1 = sp11;
        sp2 = sp21;

        all[sp1].spouseID = sp2;
        all[sp2].spouseID = sp1;

        relationDetails = date;
    }

    void print()
    {
        cout << "RelationDetails"
             << " \n";

        cout << all[sp1].name << " & " << all[sp2].name << " at " << relationDetails << "\n";
        cout << "Kids: \n";

        for (int i = 0; i < kidsID.size(); i++)
        {
            cout << all[kidsID[i]].name << endl;
        }
    }

    void addKid(int id)
    {
        kidsID.push_back(id);
        all[sp1].kidsID.push_back(id);
        all[sp2].kidsID.push_back(id);
        all[id].p1ID = sp1;
        all[id].p2ID = sp2;
    }
};