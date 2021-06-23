var person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO",
    get lang() {
        return this.language;
    },
    set lang(value) {
        this.language = value.toUpperCase();
    }
};

person.lang = "en";
console.log(person.lang); // EN