import React from 'react';
import WidgetsIcon from '@material-ui/icons/Widgets';
import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import Home from './Pages/Home';
import VideosList from './Pages/Videos/VideosList';

const MENU_ENTRIES = [
  {
    name: 'home',
    path: '/home',
    icon: <HomeIcon />,
    component: () => <Home />,
  },
  {
    name: 'videos',
    path: '/videos',
    icon: <VideoLibraryIcon />,
    component: () => <VideosList />,
  },
];

export default MENU_ENTRIES;
