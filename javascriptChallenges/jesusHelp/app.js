
function Person(firstName, lastName ) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getInitials = function() {
console.log('entro');

  let firstI = this.firstName[0].toUpperCase();
  let lastI  = this.lastName[0].toUpperCase();

  return `${firstI}${lastI}`;


};
  
  /* Do not modify code below this line */
  
  const johnDoe = new Person('eddie', 'ruiz');
  console.log(johnDoe.getInitials(), '<-- should be "JD"');