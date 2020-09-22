# React-router
React routing example


To use React Router, you first have to install it using NPM:<br/>
npm install react-router-dom

You will need to import BrowserRouter, Route and Switch from 'react-router-dom' in index.js<br/>

Then wrap your 'App' component with the BrowserRouter as shown below.<br />

```
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
       <App />
    </BrowserRouter>,
    document.getElementById('root')
)
```
Now add below code in your App.js
```
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import TopicList from './components/TopicList';

function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/Topics" component={TopicList} />
            </Switch>
        </main>
    )
}
```
For detailed information check out the project which includes example for 'Dynamic routing' as well inside the component TopicList.
