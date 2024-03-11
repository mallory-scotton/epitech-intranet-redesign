import React from 'react';
import ReactDOM from 'react-dom/client';

import './style/global.css';
import App from './App';
import {NextUIProvider} from "@nextui-org/react";

const root = ReactDOM.createRoot(document.body);

root.render(
    <React.StrictMode>
        <NextUIProvider>
            <React.Suspense fallback="loading">
                <App/>
            </React.Suspense>
        </NextUIProvider>
    </React.StrictMode>
);
