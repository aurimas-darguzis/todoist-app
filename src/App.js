import React from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import './App.scss';
import { ProjectsProvider, SelectedProjectsProvider } from './context';

export const App = () => {
  return (
    <SelectedProjectsProvider>
      <ProjectsProvider>
        <div className='App'>
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectsProvider>
  );
};
