import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Pages/Home/Home'
import './index.css'
import {Provider} from 'react-redux'
import store from './redux/store'
ReactDOM.render(<>
{/* provider connecting bridge between react component Home and redux store*/}
<Provider store={store}>
<Home/>
</Provider>
</>
,document.getElementById('root'))
