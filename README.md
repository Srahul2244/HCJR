                                                          HTML 

Q.1  <!DOCTYPE html>  is it a tag of html? If not, what is it and why do we use it?
<!DOCTYPE html> is not a tag in HTML. It is called a document-type declaration or DOCTYPE declaration. It is used to specify the version of HTML or XML that the document is written in.

Q.2 Explain Semantic tags in html? And why do we need it?
Semantic tags in HTML are special elements that provide meaning and structure to the content of a web page.examples:nav,header,footer,aside,section,main


Q.3  Differentiate between HTML Tags and Elements?
HTML Tags: HTML tags are the markup symbols used to define the structure and formatting of the content within an HTML document.

HTML Elements: HTML elements are the building blocks of an HTML document. An element consists of an opening tag, the content or text, and a closing tag.

Q.6 What are some of the advantages of HsTML5 over its previous versions?

HTML5 introduced several advantages and new features compared to its previous versions:
      Improved Semantics: tags like <header>, <nav>, <section>, and     <article>.These elements provide better structure and meaning to web pages.
Multimedia Support: HTML5 includes native support for audio and video playback without the need for external plugins like Flash.
 Canvas: The <canvas> element in HTML5 provides a powerful drawing surface that allows dynamic rendering of graphics, charts, animations, and interactive applications using JavaScript.
Q.8 What is the difference between img tag and figure tag?

The <img> tag and <figure> tag serve different purposes and have different roles in HTML:
<img> tag: The <img> tag is used to embed an image in an HTML document. It is a self-closing tag and does not have any content. It is primarily used to display images on a web page. The <img> tag requires the src attribute to specify the image source file and the alt attribute to provide alternative text for accessibility purposes. 
The <figure> tag is used to encapsulate and represent self-contained content within an HTML document. It is typically used to group an image or illustration along with its caption or description. The content inside the <figure> tag is typically an image or multimedia element, and it can include other related content as well. 
Q.9 What’s the difference between html tag and attribute and give example of some global attributes?

HTML Tags: HTML tags are the building blocks of an HTML document. They define the structure and semantics of the content within the document.
Attributes: HTML attributes provide additional information about HTML elements. They are used to modify the behavior, appearance, or functionality of the associated HTML elements.

some examples of global attributes:
class: Specifies one or more CSS classes to apply to an element for styling or JavaScript manipulation.
id: Provides a unique identifier for an element.
style: Defines inline CSS styles for an element.
title: Adds a tooltip or descriptive text for an element.
lang: Specifies the language of the element's content.
                                                   CSS

Q.1 Whats Box Model in CSS & Which CSS Properties are part of it ?

 It consists of four components or layers that form a rectangular box around an element: content, padding, border, and margin.


Content: The content area is where the actual content of an element, such as text, images, or other HTML elements, is displayed.
Padding: The padding surrounds the content and provides space between the content and the border. It is transparent by default but can be styled with background colors or images.
Border: The border is a line that surrounds the padding and content, visually separating them from the surrounding elements. It can be styled with different widths, colors, and styles.
Margin: The margin is the outermost layer of the box model and provides space between the element and adjacent elements. It creates spacing between elements on the page.
The CSS properties that are part of the box model include:
width and height: Specifies the width and height of the content area.
padding: Sets the spacing between the content and the border.
border: Controls the width, style, and color of the border.
margin: Defines the spacing outside the border.
Q.2 What are the Different Types of Selectors in CSS & what are the advantages of them?  

There are several types of selectors in CSS .
Element selectors: These selectors target elements based on their HTML tag name. For example, p selects all <p> elements, h1 selects all <h1> elements, and so on. 
Class selectors: Class selectors target elements based on the value of their class attribute. They are denoted by a dot (.) followed by the class name.
ID selectors: ID selectors target elements based on the value of their id attribute. They are denoted by a hash (#) followed by the ID name. 
Attribute selectors: Attribute selectors target elements based on the presence or value of an attribute. They are denoted by square brackets ([]).
Pseudo-classes and pseudo-elements: Pseudo-classes and pseudo-elements target elements based on specific states or parts of an element. Pseudo-classes start with a colon (:), such as :hover to select elements when they are being hovered over. Pseudo-elements target specific parts of an element, such as ::before to style content before an element. 
Q.3 What is VW/VH & How its different from PX? 
VW (Viewport Width): VW represents a percentage of the viewport width. 1 VW is equal to 1% of the viewport width. For example, if the viewport width is 1000 pixels, 1 VW would be 10 pixels (1% of 1000 pixels). VW units are dynamic and adjust automatically when the viewport size changes. They are useful for creating responsive designs that adapt to different screen sizes.
VH (Viewport Height): VH represents a percentage of the viewport height. 1 VH is equal to 1% of the viewport height. Similar to VW, VH units are also dynamic and adjust when the viewport height changes. They are useful for creating elements that scale proportionally based on the height of the viewport.
Q.4 Whats difference between Inline, Inline Block and block ?
Inline elements: Inline elements are displayed inline with the surrounding text or content. They do not create line breaks before or after themselves. Inline elements occupy only the space necessary for their content, and their width and height properties have no effect. Examples of inline elements include <span>, <a>, <strong>, and <em>. Inline elements cannot have a fixed width or height, and margin and padding properties only affect their left and right sides, not top and bottom.
Inline-block elements: Inline-block elements are similar to inline elements in that they are displayed inline with the surrounding content.Inline-block elements do not create line breaks before or after themselves . Examples of inline-block elements include <img>, <button>, and <input>.
Block elements: Block elements can have a specified width, height, margin, padding, and other box model properties. Examples of block elements <div>, <p>, <h1> to <h6>, and <ul>. Block elements provide the most control over layout and are commonly used to structure and group content on a web page.
Q.5 How is Border-box different from Content Box?
Content-box: The dimension of an element only includes ‘height’ and ‘width’ and does not include ‘border’ and ‘padding’ given to the element. Padding and Border take space outside the element.
Border-box: When an element has a box-sizing: border-box, the specified width and height of the element include both the content area, padding, and border. 
Q.6 What’s z-index and How does it Function ?
The z-index property specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order.z-index only works on positioned elements.

Q.7 What’s Grid & Flex and difference between them?

CSS Grid: CSS Grid is a two-dimensional layout system that allows you to create grid-based layouts. It divides the space into rows and columns, allowing you to position elements in any cell of the grid. CSS Grid is well-suited for creating complex layouts with multiple rows and columns. It provides precise control over both the horizontal and vertical alignment of elements. 

Flexbox: Flexbox, is a one-dimensional layout system that is designed for arranging elements in a single row or column. It is best suited for building flexible and dynamic layouts. 

Q.7 Difference between absolute and relative and sticky and fixed position explain with example.

Absolute Positioning:
Elements with position absolute are positioned relative to their nearest positioned ancestor. Absolute positioned elements are taken out of the normal document flow, which means they do not affect the positioning of other elements.
The positioning of an absolute element is determined by using the top, right, bottom, and left properties. These properties specify the distance between the element and its closest positioned ancestor or the initial containing block.
 Relative Positioning:
Elements with position-Relatives are positioned relative to their normal position in the document flow. The positioning of a relatively positioned element is determined by using the top, right, bottom, and left properties, which offset the element from its original position.
            Sticky Positioning:
Elements with position-sticky are positioned based on the user's scroll position. They act as relatively positioned until they reach a specified threshold, and then they become fixed to the viewport.The top, right, bottom, and left properties are used to define the position of the element when it becomes sticky.
 Fixed Positioning:
 Elements with position: fixed are positioned relative to the viewport, regardless of scrolling. They remain fixed in their specified position, even when the page is scrolled. The positioning of a fixed element is determined by using the top, right, bottom, and left properties, which specify the distance from the edges of the viewport.
Q.12 What are Pseudo class in CSS & How its different From Pseudo Elements? Pseudo-classes: Pseudo-classes starts with single colon (:).Pseudo-classes are used to select elements based on specific states or conditions. example is..,  : hover, : focus,:n-th-child().
Pseudo-elements: Pseudo-elements, on the other hand, target and style specific parts or sections of an element's content. They start with double colon (::).Examples of pseudo-elements ,::before, ::after, etc.

                                                             JavaScript

Q.1 What is Hoisting in Javascript ?
Allows us to access functions and variables before they are created.
2 things that are hoisted in JavaScript:
Function declarations
Variable declarations
sayHi(); 
function sayHi() {
 console.log('Hi');
 }

Q.2 What are different higher order functions in JS? What is the difference between .map() and .forEach() ?
higher-order functions are functions that can take other functions as arguments or return functions as results.Some higher-order functions in JavaScript re  ,  map(), forEach(), filter(), reduce(), and sort().
The main difference between map and forEach is their return values.
Map: Map returns a new array with the same length as the original array.
forEach: ForEach doesn't return an array.
Q.3 What is the difference between .call() .apply() and .bind()? explain with an example?
Call:
The call() method calls the function with a given this value and allows passing in arguments one by one separating them with commas.
let p1 = {
  firstName: 'Abhishek',
lastName: 'Singh'
};
function sayWelcome(greeting) {
  console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}
sayWelcome.call(p1, 'Welcome')
Apply: 
The apply() method calls the function with a given this value and allows passing in arguments as an array.
Example:  
let p1 = {
  firstName: 'John',
  lastName: 'Smith'
};
function sayWelcome(greeting) {
  console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}
sayWelcome.apply(p1, ['Welcome'])
Bind
The bind() method returns a new function and allows passing in a this array and any number of arguments.
let p1 = {
  firstName: 'John',
  lastName: 'Smith'
};
function sayWelcome() {
  console.log('Welcome ' + this.firstName + ' ' + this.lastName);
}
let sayWelcomeJohn = sayWelcome.bind(p1);
sayWelcomeJohn()

Q.4 Explain Event bubbling and Event Capturing in JavaScript with suitable examples?
Event bubbling is the most common way events propagate through the DOM. When an event occurs on an element, it first triggers the event on the target element and then bubbles up to its parent and ancestor elements.
<div class=”parent”>
<div class =”child”>
<button>Click</button>
</div>
</div>
In this click will triggers first than move to parent and  the move to root element.
Event Capturing:Event capturing is the opposite of event bubbling. When an event occurs on an element, it triggers the event on the target element's ancestors first before reaching the target element.
Q.5 What is function currying with example?
Function Curing in javascript is a technique where function with multiple arguments is transformed into a sequence of functions with each taking a single arguments.

Function add(x){
return function(y){
return a+b
}
}
Const addfive=add(5);
console.log(addfive(10))
console.log(addfive(20))
Q.6 Explain execution context diagram of following code snippets, use white board to draw
execution context diagram?

console.log('First'); 
setTimeout(() => console.log('Second'), 0);
console.log('Third');
Code Snippet 2
console.log('First');
function secondCall() {
console.log('Second');
}
setTimeout(secondCall, 2000);
setTimeout(() => console.log('Third'), 0);
console.log('Third');

In this ,first ,third ,third,second will print .
In this setimout it will display after few seconds .soo in javascript it works like asynchronously in nature .soo it can not wait any function to execute .it execute another function which is immediately invoking .
Q.7 What are promises? What are the different states of a promise? Support your answer
with an example where you need to create your own promise.
Promise  can be used to write a asynchronous code .There are  three state  in Promise.
Pending State;
Fulfilled state;
Rejected state;

var promise = new Promise(function (resolve, reject) {
		if {
		resolve("Worked");
	}
	else {
		reject(new Error("Failed"));
	}
});
promise.then(function (msg) {
	console.log(msg); 
}, function (err) {
	console.log(err);
});

Q.8 What is ‘this’ keyword in JavaScript? explain with an example & create?
This  keyword refers to different objects depending on how it is used.If we are using alone than it refers to global object.And in event this keyword refers to Element that received the event.
let x = this;
Here  this refers to object window .
Q.9 Explain event loop Call Stack Callback queue and Micro Task queue in Your Words?
Event loop:it a mechanism to handle the execution of code in an asynchronous and non-blocking manner.
Call Stack:Whenever function is called It is added to the top of the stack and when a function complete its execution ,than it is removed from top of the stack.It follows last in first out principal.
CallBack Queue:It is a queue that holds the callback  function or tasks that are ready to be executed.
Micro Task Queue:It also know as job queue.IT is a queue that hold mico tasks. Example like .then() and .catch() .

Q.10 Explain Debouncing and Create a project where you are using Debouncing?
Debouncing:Debouncing can be used to increase the performance .If the events happens multiples times within specified time period only the last occurrence will trigger the function execution.
Q.11 Explain Closures and Use cases of Closures?
Closures:Closures is the combination of function bundled together with  references to its surrounding state.A closures give you you access to outer function scope from inner function.
1: it can be used for data Privavcy.
2:It can used for Curring and Partial Application.
2.It can be used to perform Asynchronous operations.
3.It can be used to implement memoization.
                      React Question:
Q.1 What’s React and What are the advantages of it?
React is a javascript library for building user interfaces.It is developed by facebook and is widely used by web development.
Advantages of it:
1:It allows a component based architecture.
2:It uses a virtual dom.
3:Resuability of code and compatibility.
Q.2 What's Virtual Dom in React & What are the advantages of it?
Virtual dom in react:Virtual dom is lightweight copy of the real dom. And react compares the the virtual dom with real dom to identify the minimal  changes neede and updates only those parst. This approach improves performances and provides a smoother user experience.
Q.3 Explain LifeCycle of React Components?
In react there are different phases during creation,updating and removal.
1.Mounting:Mounting is the phase when a component is intialized.
2:Updating:It is invoked when there is something updated.It allows updating the state based on changes in props.
3:Unmounting:This method is called just before the component is removed from the DOM.It allows performing cleanup tasks,such as cancelling timers,remving event listeners.etc
Q.4 Whats the difference between between Functional Components and Class
Components? 
Functional component:
.Functional component are stateLess and do not have there own internal state.
.They receive data and functionality throughs the props passed them as function arguments.
.Functional components are easier to read and write and test due to there simplicity.
.They can utilize React Hooks to manage state and perform side effects.
Class Components:
.Class components can have there own internal state and accessed via “this.state” and update using “this.setState()”.
.They are more complex.They are used for writing complex logic.
.They have life cycle like “componetDidMount”,”componetDidUpdate”, and “ComponentWillUnmount”.
Q.5 What are the hooks in React & Can we use Hooks in Class Components?
Hooks are introduced in React 16.8 that allow developers to use State and other React features in Functional components without the need of functional components.
Here are some hooks in react are:
1:useState
2:useEffect
3:useContext
4:useReducer
5:useMmeo
6:useRef 
These all are inbuilt hooks present in React.

Q.7 What’s useState Hook & Advantages of it?
UseeStae is a inBuilt hooks present in Recat that allows functional components to manage state.
The useState tools initial value as its argument and returns an array with two elements. The current state and function to update that state value.
Advantage are:
1:Simplicity and Readability.
2:No class syntax require.
3:It can be use multiples times to manage multiple independent state variables.
4:It also optimised re-rendering off components.
Q8:Explain useEffect & Advantages of it?
UseFffect can be used to control side effects.Side effects are actions that happenoutside of the normal rendering process, such as fetching data from api or manipulating the dom.
Advantages are:
1:	Centralised side effects.
2:It handles Asynchronous operations such as data fetching or api calls by using async/await or promises.
3:Dependency Management.
4:Cleanup mechanism that runs when the component is unmountedor before re-runnig the effect.

Q.9 Explain Context Api and create a minor project on it (5 Marks)
- Create dashboard and with button on clicking on that change theme to dark and light
The context Api is Feature provided by react that allows you to manage global state and share data between components without the need to pass props manually through every level of the component tree.It provides to create a centralised state container and access that state fromm any component within the application.
Q.10 Explain useReducer and Its advantages?
UseReducer can be used to manage complex state and state transitions in functional components.
It takes two arguments : the reducer function and the initial state.The reducer function receives the current state and an action and it returns the new state based on the action type.
Advantages:
Used to manage Complex State Managements.
Optimised performance.
Q.15 Explain Prop Drilling & How can we avoid it?
Props driilling refers to the process of passing props from a higher -level component through intermediate componets in order to reach a lower level componet through intermediate components in order to reach a lower level component that actually needs the props.
Using context Api we can avoid prop drilling.
Using component  composition we can avoid prop drilling .





















