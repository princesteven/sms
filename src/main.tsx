import {Provider} from "react-redux";
import App from './app/entry-point/app';
import * as ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {store} from "./app/modules/common/configs";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);
