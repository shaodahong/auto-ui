import './style.scss'
import 'prismjs/themes/prism-tomorrow.css'
import './assets/css/docs.scss'

import React from 'react'
import { render } from 'react-dom'

import Routers from './routers'

render(<Routers />, document.getElementById('root'))