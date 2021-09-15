import React from 'react'
import ReactDOM from 'react-dom'
import {SpeechProvider} from '@speechly/react-client'

import { Provider } from './context/context'
import App from './App'

import './index.css'

ReactDOM.render(
    <SpeechProvider appId='e4f86e7c-c00c-47a4-8ab4-f5f1c2ca5609' language="en-US" >
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root'))