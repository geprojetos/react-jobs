import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import appRoutes from './app.routes';
import Menu from './shared/components/menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      {
        appRoutes.map((route, indice) => {
          
          return (
            <Suspense key={ indice } fallback={ <div>Carregando...</div> }>
              <Switch>
                <Route 
                  exact={ route.exact }
                  path={ route.path }
                  component={ route.component }
                />
              </Switch>
            </Suspense>
          )
        })
      }
    </div>
  );
}

export default App;
