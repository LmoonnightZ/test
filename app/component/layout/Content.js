/**
 * Created by lychee on 2019/11/25.
 */
import React from 'react';
import {Route} from 'react-router-dom';
import Content01 from './../home/Content01';
import Content02 from './../home/Content02';
import Content03 from './../home/Content03';

export default class Content extends React.Component {
    render() {
        return (
            <div>
                <Route path="/home/Content01" component={Content01}/>
                <Route path="/home/Content02" component={Content02}/>
                <Route path="/home/Content03" component={Content03}/>
            </div>
        )
    }
}
