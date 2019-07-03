let people = [
  {
    name: 'Jessie',
    phone: +79267654321
  },
  {
    name: '',
    phone: +79260987654
  },
  {
    name: 'Anny',
    phone: null
  },
  {
    name: 'Hector',
    phone: +79262121212 
  }
]

let app = new Vue({
  el: '#app',
  data: {
    showPerson: false,
    people: people,
    newPerson: {}
  },
  methods: {
    toggleAddPerson: () => {
      app.showPerson = app.showPerson ? false : true;
    },
    hideAddPerson: () => {
      app.showPerson = false;
    },
    showAddPerson: () => {
      app.showPerson = true;
    },
    addPerson: () => {
      let person = app.newPerson;

      app.people.push(person);
      app.hideAddPerson();
      app.resetNewPerson();
    },
    resetNewPerson: () => {
      app.newPerson = {
      };
    },
    
    editPerson: (index) => {
      app.newPerson = app.people[index];
      app.people.splice(index, 1);
      app.showAddPerson();
    },
    deletePerson: (index) => {
      app.people.splice(index, 1);
    }
  }
});