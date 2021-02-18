import loadable from "@loadable/component";
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {syncHistoryWithStore} from "mobx-react-router";
import {getArtistRoute} from "utils/routing";
import * as store from "../../store";
import Provider from "Containers/App/Provider";
import PageLoading from "Components/PageLoading";
import Layout from "Components/Layout";
import SideBar from "Components/SideBar";
import Player from "Components/Player";
import Header from "Components/Header";


const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store.routerStore);

const loadableOptions = {fallback: <PageLoading/>};
const Home = loadable(() => import('Containers/PageHome'), loadableOptions);
const Artist = loadable(() => import('Containers/PageArtist'), loadableOptions);

const App = () => {
	return (
		<Provider>
			<Router history={history}>
				<Layout
					aside={<SideBar/>}
					header={<Header/>}
					footer={<Player/>}
				>
					<Switch>
						<Route path={getArtistRoute()} component={Artist}/>
						<Route exact path="/" component={Home}/>
						<Redirect to="/"/>
					</Switch>
				</Layout>
			</Router>
		</Provider>
	)
}

export default App;