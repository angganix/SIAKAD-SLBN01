import { Route, Switch } from 'react-router-dom';
import Layout from './layouts/Layout';
import router from './routers';
import { Toaster } from 'react-hot-toast';

function PrivateRoute(props) {
   return (
      <Layout pageTitle={props.title}>
         <Route {...props} />
      </Layout>
   )
}

function App() {
   return (
      <div>
         <Switch>
            {router.map((route, idx) => (
               <PrivateRoute key={idx} {...route} />
            ))}
         </Switch>
         <Toaster />
      </div>
   )
}

export default App
