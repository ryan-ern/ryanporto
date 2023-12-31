import {
    BrowserRouter, Route, Routes,
} from 'react-router-dom'

import Layout from './components/layout/Index'

import Welcome from './page/Welcome'
import News from './page/News'
import Page404 from './page/Page404'
import Username from './middleware/Username'
import Home from './page/Home'
import Projects from './page/Projects'
import Contacts from './page/Contacts'


export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/ryanporto" element={<Welcome />} />
                <Route path="/ryanporto/panel" element={(
                    <Username>
                        <Layout />
                    </Username>
                )}>
                    <Route index element={<Home />} />
                    <Route path="/ryanporto/panel/api/news" element={<News />} />
                    <Route path="/ryanporto/panel/projects" element={<Projects />} />
                    <Route path="/ryanporto/panel/contact" element={<Contacts />} />
                </Route>
                {/* Not Found */}
                <Route path="/ryanporto/404" element={<Page404 />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}