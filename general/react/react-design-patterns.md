## Static 

- classes can have static methods 
- all lifecycle methods are specific for classes 
- functions can contain static methods, usage fnName.method
- useEffect() instead of componentDidMount() in functions

## React 

- Sometimes we break HTML semantics when we add <div> elements to our JSX to make our React code work, especially when working with lists (<ol>, <ul> and <dl>) and the HTML <table>
- `<React.Fragment>` to group together multiple elements
- The for attribute is written as htmlFor in JSX
- 3 ways to use Router:

```text
1. Wrap it in a Route:

<Route path="/about">
    <About />
</Route>


2. Use component:

<Route path="/portfolio" component={Portfolio} />


3. Pass in a function in the component (render props):

<Route path="/cars/:id" component={props => {
    const car = cars[props.match.params.id];
    if (car) {
    return (<CarDetailsComponent car={car}/>);
    } else {
    return null;
    }
}}/>

```

- Inheritance vs composition 
    - `extends` vs `hoc`
    - Prototypal inheritance vs spread operator to create a brand new component

## Pass data b/w components 

- Parent to child, use `props`
    ```text
    props are immutable whereas state data are mutable
    ```
- Child to Parent, use `callbacks` or `render props`
    - `render props` when you want to use data from the same component as well as data from parent component to be used
    - `props.children` is when you don't want to share render data
- Between Siblings 
    - Use `Redux` (in-built publisher subscriber pattern)
    - Use `Context API`
        - Context provides a way to share values like `locale preference`, `UI theme` between components without having to explicitly pass a prop through every level of the tree
        - Have the component wrapped in a consumer, it will go up the hierarchy to find the nearest provider to get the context
- Custom `Publisher Subscriber` pattern 
- `props.children`
    - provide control to the main component and avoid redundant code
    - separation of concerns
    - no additional functionality is involved

## Redux 

- State machine that holds the entire state of the application
- Has in-built publisher / subscriber pattern

- There are three building parts: actions, store, and reducers
    - Lets you keep data in one global place (the store) and feed it directly to any component in the app
    - Actions are sent using the store.dispatch() method. Actions are plain JavaScript objects with a type and data (payload info)
    - Actions are Dispatched to the Reducers which alter the initial state within the Store
    - Reducers are pure functions that take the current state of an application, perform an action, and return a new state
    - `combineReducers` All reducers of a react app are combined into one single reducer which is passed as an argument to the redux store

- `connect` is a HOC that hooks into Redux, pulls out the entire state, and passes it through the mapStateToProps
- `connect` provides data-binding b/w react components and reducer state
- `mapStateToProps` transforms the Redux state into an object containing props

- `redux-thunk` 
    - used to handle asynchronous actions in Redux
    - a middleware that lets you call action creators that return a function instead of an action object

## HOC

- HOCs add features to a component
- HOC is an advanced technique in React for reusing component logic
- A higher-order component is a function that takes a component and returns a new component
- Pass Unrelated `props` Through to the Wrapped Component
- Refs Aren’t Passed Through but forward the ref to the wrapped component using the `forwardRef` function of React

```js
const inputString = (props) => {
    return (
        <div>{props.children}</div>
    )
}
```

```js
const hoc = (WrappedComponent) => (props) => {
    let splitStr = props.children.toLowerCase().split(' ');

    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }

    return (
        <div>
            <WrappedComponent {...props}>
                {splitStr.join(' ')}
            </WrappedComponent>
        </div>
    )
}
```

```js
const CapitalizeCharInStr = hoc(inputString);

export default function App() {
    return (
        <div>
            <CapitalizeCharInStr>my name is priya and i work at apple</CapitalizeCharInStr>
        </div>
    )
}
```

## Hooks 

- Hooks are functions that let you “hook into” React state and lifecycle features from function components 
- Hooks don’t work inside classes — they let you use React without classes
- When our component just receives props and renders them to the page, this is a ‘stateless component’, for which a pure function can be used

- `useState` returns a pair: the current state value and a function that lets you update it
- `useEffect` serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes
- `useContext` lets you subscribe to React context without introducing nesting
- `useReducer` lets you manage local state of complex components with a reducer

## Redux Sagas

- All sagas are generator functions
- listen into an action type by using takeLatest 
- use generators as callbacks and for async actions use call method
- Generators
      - fun() -----> generator Object
      - generator.next() ---> {
                                  value:
                                  done: true / false
                              }
- Generators have the ability to play and pause. yield statement to pause the execution (returns done false)
- sagas instead of redux thunk? 
    ```text
    Redux-Saga is a library that aims to make application side effects (e.g., asynchronous actions such as fetching data) easier to handle and more efficient to execute. However, unlike Redux-Thunk, which utilizes callback functions, a Redux-Saga thread can be started, paused and cancelled from the main application with normal Redux actions.
    ```
- Redux-Thunk returns promises, which are more difficult to test. Testing thunks often requires complex mocking of the 
  fetch api, axios requests, or other functions
  
- With Saga, avoid callback hell and test functions more easily

## Software Engineering Concepts 

```text
The “Document Object Model” is represented as a tree data structure. Because of that, the changes and updates to the DOM are fast. But after the change, the updated element and it’s children have to be re-rendered to update the UI which makes it slow. Therefore, the more UI components you have, the more expensive the DOM updates could be, since they 
would need to be re-rendered for every DOM update.

When the state of a component changes, React updates the virtual DOM tree. Once React knows which virtual DOM objects have changed, then React updates only those objects, in the real DOM.
```