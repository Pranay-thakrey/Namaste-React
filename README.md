# Notes Questions

# Package.json
- It is a configuration for NPM. 
- For our project we need some packages and those packages are dependencies.
- It keep track of the dependencies/package that we are using and the version they are on.

# Package-lock.json
- It keep tracks of all the exact versions of packages.
* It checkes the SHA file in the local machine and the file that is ddployed on production.

# Bundler
- Bundler is a dependency.
- It bundled our app properly so that we can send it to production.
- Examples of bundler: Parcel, web pack, veet

# dependencies
1. Dev dependencies - It is required in developement phase
2. Normal dependencies - Those dependencies required when it is deployed on production.

# Node Modules
Node modules contains the actual data of dependencies and the packages.
Transitive dependencies - When dependencies have there own dependencies
Parcel need lots of dependencies that are present in node module.


# NPM 
- It is a standard reposatory for all the packages that we need in react.
- NPM is to install the package.
- NPX is to execute the package.

# Automatic reload
- it is knowns as HRM - Hot Module Replacement

# npx parcel build index.html
When you run npx parcel build index.html, Parcel will create a dist (distribution) folder by default, and it will generate optimized and 
minified files ready for deployment. These files will typically include your HTML, CSS, JavaScript, and other assets, 
all bundled and optimized for production use. You can then deploy the contents of the dist folder to a web server or hosting platform.

# Babel
- The primary use of Babel is to transpile, or convert, modern JavaScript code into an older version of JavaScript that is compatible with a broader range of browsers.

# Component composition
- When we keep component into component it called as component composition

# State variable/ useDtate() hook
- Whenever a state variable updates, react will rerender the component. (triggers reconcilliation process)

# Virtual DOM
1. Diff algo - it compared the renderend DOM with virtual DOM, finds out to difference then update the old DOM

# conditional rendaring
- When we want to provide some condition while rendaring the component called conditional rendaring. for example if API data is not rendered and for that condition we can give shimmer data.

# reconciliation
- The reconciliation process is React's way of updating the UI in the most efficient way possible by only making changes where necessary, instead of tearing down and rebuilding the UI from scratch every time a change occurs. This is what makes React applications fast and responsive.

# useEffect()
- It is a fucntion provided by react which is used to perform operation after intial render. Eg- Like fetching data.
- It include a callback function and a dependancy array. if a dependacy array is not present then useEffect will call after every render and if the dependacy array is present then it will only call after initial render.
- If we provide any dependancy into the array (ex- use state variable) then on every update of the array dependacy the useEffect will called.