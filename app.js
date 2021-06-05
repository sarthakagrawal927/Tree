let all = {};
let l = 1;

class details {
  constructor(name) {
    this.name = name;
    this.p1ID = this.p2ID = this.spouseID = "";
    this.kidsID = [];
    this.siblingsID = [];
  }
}

class relationshipDetails {
  constuctor(marriageDate) {
    this.marriageDate = marriageDate;
  }
}

class user {
  constructor(details) {
    this.details = details;
    this.id = l++;
    all[this.id] = this.details;
  }
  print() {
    // this.details.siblingsID = all[this.details.p1ID].kidsID;
    console.log(this);
  }
}

class relation {
  constructor(sp1, sp2, date) {
    this.sp1 = sp1;
    this.sp2 = sp2;
    all[this.sp1].spouseID = sp2;
    all[this.sp2].spouseID = sp1;

    this.date = date;
    this.kidsID = [];
  }

  print() {
    console.log(this);
  }

  addKid(id) {
    this.kidsID.push(id);
    all[this.sp1].kidsID.push(id);
    all[this.sp2].kidsID.push(id);
    all[id].p1ID = this.sp1;
    all[id].p2ID = this.sp2;

    for (let i in all[this.sp1].kidsID) {
      // giving new sibling to previous kids
      all[all[this.sp1].kidsID[i]].siblingsID.push(id);
    }

    // giving all siblings to this kid
    all[id].siblingsID = all[this.sp2].kidsID.filter((idkid) => idkid !== id);
  }
}

let user1 = new user(new details("Priti"));
let user2 = new user(new details("Praveen"));
let user3 = new user(new details("Sarthak"));
let user4 = new user(new details("Chinu"));
let user5 = new user(new details("Chintu"));

let relation1 = new relation(user1.id, user2.id, "12.8.2");

relation1.addKid(user3.id);
relation1.addKid(user4.id);
relation1.addKid(user5.id);

user1.print();
user5.print();
