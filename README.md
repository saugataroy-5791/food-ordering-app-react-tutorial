### Inception

-  import react development/production cdn links
-  const element = React.createElement("tag", { attributes }, "children/content")
-  const root = ReactDOM.createRoot(document.getElementById("root"))
-  root.render(element)

-  React element is a simple JS object not a HTML tag which contains props property, props property contains the attributes and children/content
-  children/content if siblings then it would be an array
-  React is a library not a framework

### Igniting

-  Add NPM in project: npm init
-  npm is used to install packages in our project, dependency, dev dependencies
-  install a bundler: parcel, webpack, vite
-  ^ : will update to all future minor/patch versions
-  ~ : will update to all future patch versions
-  Transitive dependencies: dependencies which are dependent on other dependencies
-  npm: to install, npx: to execute
-  Parcel
   -  dev build
   -  local server
   -  HMR: hot module replacement using file watching algorithm
   -  faster build using caching, parcel-cache
   -  image optimization
   -  minification
   -  bundling
   -  compress
   -  consistent hashing
   -  code splitting
   -  differential bundling: support of older browsers
   -  Tree shaking
-  browserslist cinfigurations: last 2 versions covers almost 79% of all browsers

### Laying the foundation

-  React element: JS object equivalent to DOM element but not an HTML element
-  ReactDOM will take React element, convert into HTML element and will replace in the DOM
-  JSX is a JS syntax used to write simple code in React
-  JSX is not part of React
-  JSX is not HTML inside JavaScript, it is HTML like syntax
-  JSX element are React element: JS object equivalent to DOM element but not an HTML element
-  JS engine in browsers cannot understand JSX
-  JSX code is transpiled by Babel, JSX code => React.createElement => HTML
-          Babel
   -  transpiles JSX into JS
   -  converts modern JavaScript code into a version compatible with all browsers
-  Attributes in JSX should be in camelCase
-  JSX in multiple line should be in ()
-  React components
   -  Class based: old
   -  Functional: new, JSX
-  React functional component is just a JS function which returns some JSX
-  Component composition: component inside component
-  In JSX {} we can write any JS code, React sanitizes before executing

### Talk is cheap, show me the code

-  Passing prop to a component is like passing arguement toa function
-  Props is a JS object
-  Dynamic data is passed to component via props
-  config driven UI
-  Array.map to iterate, key must be used along with uique id to stop rerendering of entire array items
-  Using index as a key is not recommended as it is an anti-pattern

### Let's get hooked

-  React is fast due to fats dom manipulation
-  React hooks are normal JS functions written by React developers
-  Two important hooks: useState() and useEffect()
-  Whenever a state variable changes, React re-renders the component
-  React algorithm: Reconciliation or React Fiber in React 16
-  React creates a virtual DOM of the real DOM, virtual DOM is representation of the actual DOM
-  Virtual DOM is basically an Object or React Element
-  React fiber uses Diff algorithm which finds the difference between old and new virtual DOM and actually update the DOM on every render cycle
-  Incremental rendering

### Exploring the world

-  Monolith vs Microservices architechture
-  Separations of concern/Single responsibility
-  Two ways to fetch data
   -  make api call when page loads, wait for data to arrive and render the UI,
   -  render UI when page loads, call api and render the data
-  In React the second approach is followed
-  React has fast render cycles
-  useEffect first arguement is a callback functioon and second is a dependency array
-  useEffect's callback functions will be called after the component is rendered
-        Optional chaining
-  Conditional rendering
-  whenever state variable changes, React will re-render the component and the updated value would be rendered

### Findinig the path

-  Routing configuration in App.js file
-  createBrowserRouter will create the routing configuration
-  We need to provide the routing configuration to our app using RouterProvider
-  react router dom gives us a special hook, useRouterError to capture routing error
-       Outlet is a tunnel render child routes
-  Navigate to a new page without reloading the whole page using Link
-  Two types of routing: client side and server side routing
-  useParams to capture route params data
