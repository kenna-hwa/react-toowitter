import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';



const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return <Router>
        <Switch>
            {isLoggedIn ? 
            // *Fragment 많은 요소들을 render하고 싶을 때 사용
            // div도 아니고 span도 아닌 상위 요소를 만들어 두는 것
            <> 
            <Route exact path="/">
                <Home />
            </Route>
            </> : 
            <>
            <Route exact path="/">
                <Auth />
            </Route>
            </>}
        </Switch>
    </Router>
}

export default AppRouter;