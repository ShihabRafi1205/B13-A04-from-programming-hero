1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
2. How do you create and insert a new element into the DOM?
3. What is Event Bubbling? And how does it work?
4. What is Event Delegation in JavaScript? Why is it useful?
5. What is the difference between preventDefault() and stopPropagation() methods?


Ans 1 : We use getElementById to select one element by id, and getElementsByClassName to select all elements a class , it returns html collection,
while we use querySelector to select the first element by any CSS selector, and querySelectorAll to select all matching elements, it returns nodeList.
 
Ans 2 : First of all I'll create a element by   "document.createElement("")", then I'll insert it into the DOM by   "document.element.appenchild()"


Ans 3 : The process of propagating events from the target element up to its parent elements in the DOM. It works : When I clicked a child element the event happens on that element than it propagates up to its parent element in the DOM.




Ans 4 : Event Delegation : We attach a event listener to a parent element instead of multiple child elements.
It handles dynamic elements added later, and makes code cleaner.


Ans 5 : preventDefault() stopes the default browser action , while stopPropagation() stops the event bubbling .