/**
 * Created by lychee on 2019/11/25.
 */
import './index.html';
import './style/app.scss';
import React from 'react';
import ReactDom from 'react-dom';
import App from './component/App';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDom.render(
    <BrowserRouter>
        <Route path="/" component={App}/>
    </BrowserRouter>
    ,
    document.getElementById('root')
);