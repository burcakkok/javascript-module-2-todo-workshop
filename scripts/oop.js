
const cat = {
    name: "Lulu",
    age: 2,
    race: "tabby",
    color: "orange",
    meow: function() {
        console.log(`miaow ${this.name} is talking, give me food human!`)}
};

console.log(cat)

console.log(typeof(cat))

console.log(cat.race)

console.log(cat["color"])

cat.meow()

console.log(Object.keys(cat))

for (let property in cat) {
    console.log(property)
    console.log(cat[property])
}



