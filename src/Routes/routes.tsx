import { BrowserRouter, Switch , Route} from "react-router-dom"
import App from '../pages/Guitar';
import Home from "../pages/Home";


const Routes = () => (
    <BrowserRouter>
        <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/guitar" component={App}/>
        </Switch>
    </BrowserRouter>
    
)

export default Routes