## React Component Lifecycle

![](./lifecycle.png)

## Mounting

- These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
    - constructor()
    - static getDerivedStateFromProps()
        - combine props with states 
        - api call is not made in app.js but in the component
        - have access to props and the state in the component to make any changes
    - render()
    - componentDidMount()

## Updating

- An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:
    - static getDerivedStateFromProps()
    - shouldComponentUpdate()
        - should the component re-render (performance optimization)
    - render()
    - getSnapshotBeforeUpdate()
    - componentDidUpdate()
    
## Unmounting

- This method is called when a component is being removed from the DOM:
    - componentWillUnmount()

## Error Handling

- These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
    - static getDerivedStateFromError()
    - componentDidCatch()

## Run functions only once 

- use componentDidMount() or useEffect(fn, [true]) 
- use useEffect for api calls, when subscribing to custom events (publisher subscriber pattern)
- memoizeOne is a library that accomplishes the same functionality as that of useEffect

## Important lifecycle methods 

- `constructor` (use in class, initializing state but not using setState, super)
- `render` (jsx component will be mounted in the dom)
- `componentDidMount()` (when mounting is complete)
- `componentWillUnMount()` (when component is getting removed, de-register events / subscriptions, ex: key-binding)
- `getDerivedStateFromProps()` (fires right before calling render method)
- `shouldComponentUpdate()`
- `componentDidCatch()`