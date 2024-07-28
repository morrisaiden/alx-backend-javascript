export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
/* What is Symbol.toStringTag?
// eslint-disable-next-line max-len
In JavaScript, every object has a default way of being represented as a string.
For example, if you try to convert an object to a string, it might look like this:

javascript
Copy code
let obj = {};
console.log(obj.toString()); // "[object Object]"
What Does Symbol.toStringTag Do?
Symbol.toStringTag is a special property that you can use to change this default string
representation.

What Does the Code Do?
javascript
Copy code
get [Symbol.toStringTag]() {
    return this._code;
}
get:

This is used to define a getter method, which is a way to define a property that runs a function
when you try to access it.
[Symbol.toStringTag]:

This is a special symbol that JavaScript uses to figure out what string to
show when you try to print the object.
return this._code;:

This returns a value from the object. In this case, this._code is a property of the object.
Example in a Simple Class
Let's say you have a class Course:

javascript
Copy code
class Course {
  constructor(code) {
    this._code = code; // Store the course code
  }

  get [Symbol.toStringTag]() {
    return this._code; // When someone asks for the toStringTag, return the course code
  }
}

const course = new Course('CS101');
console.log(Object.prototype.toString.call(course)); // "[object CS101]"
Step-by-Step Explanation
Create a Class:

You define a class Course with a constructor that takes a code and stores it in this._code.
Define the Getter:

You define a getter for Symbol.toStringTag. This special getter runs whenever you try to
get the string representation of the object.
Return the Course Code:

When the getter runs, it returns the course code stored in this._code.
Convert to String:

When you convert the object to a string using Object.prototype.toString.call(course),
it uses the value returned by the getter (CS101) instead of the default [object Object].
Why Is This Useful?
This is useful because it allows you to customize how your objects are represented as strings,
making it easier to identify them when debugging or logging. Instead of seeing a generic
[object Object], you see something more meaningful, like [object CS101]. */
