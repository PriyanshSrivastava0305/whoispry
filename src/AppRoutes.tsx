import React from 'react';
import { useRoutes } from 'react-router-dom';
import Index from './pages/Index';
import Article from './pages/Article';
import AlternateIndex from './pages/AlternateIndex';
import NotFound from './pages/NotFound';
import About from "./pages/about";


const dynamicPages = import.meta.glob('./pages/articles/*.tsx', { eager: true });

const articleRoutes = Object.entries(dynamicPages).map(([path, module]: any) => {
  const slug = path.split('/').pop()?.replace('.tsx', '');
  return {
    path: `/articles/${slug}`,
    element: <module.default />,
  };
});

const routes = [
  { path: '/', element: <Index /> },
  { path: '/article', element: <Article /> },
  { path: '/alt', element: <AlternateIndex /> },
  { path: '/about', element: <About /> },
  ...articleRoutes,
  { path: '*', element: <NotFound /> }
];

export default function AppRoutesWrapper() {
  return useRoutes(routes);
}
