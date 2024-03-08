/* @refresh reload */
import { lazy } from 'solid-js'
import { render } from 'solid-js/web';
import { Router, Route, A } from '@solidjs/router'

import './index.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Blog = lazy(() => import('./pages/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show-element');
        } else {
            entry.target.classList.remove('show-element');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-element');
hiddenElements.forEach((el) => observer.observe(el));

render(() => (
    <>
        <NavBar />
        <Router>
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/projects" component={Projects} />
            <Route path="/" component={Home} />
            <Route path="*" component={NotFound} />
        </Router>
    </>
), root);
