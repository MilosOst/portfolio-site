/* eslint-disable @typescript-eslint/no-explicit-any */
import trainingCreation from '../assets/projectScreenshots/trainingApp/trainingCreation.png';
import trainingDrillSelection from '../assets/projectScreenshots/trainingApp/trainingDrillSelection.png';
import trainingDuplicate from '../assets/projectScreenshots/trainingApp/trainingDuplicate.png';
import trainingView from '../assets/projectScreenshots/trainingApp/trainingView.png';

import mangeProfilePage from '../assets/projectScreenshots/mange/mangeProfilePage.png';
import mangeFeed from '../assets/projectScreenshots/mange/mangeFeed.png';
import mangeRestaurantPage from '../assets/projectScreenshots/mange/mangeRestaurantPage.png';
import mangeList from '../assets/projectScreenshots/mange/mangeList.png';

import tetrisMenu from '../assets/projectScreenshots/tetris/tetrisMenu.png';
import tetrisGameplay from '../assets/projectScreenshots/tetris/tetrisGameplay.png';
import tetrisColorBlind from '../assets/projectScreenshots/tetris/tetrisColorBlind.png';

export const imageMap = new Map<string, string>();

imageMap.set('training-creation', trainingCreation);
imageMap.set('training-drill-selection', trainingDrillSelection);
imageMap.set('training-duplicate', trainingDuplicate);
imageMap.set('training-view', trainingView);

imageMap.set('mange-profile', mangeProfilePage);
imageMap.set('mange-feed', mangeFeed);
imageMap.set('mange-restaurant', mangeRestaurantPage);
imageMap.set('mange-list', mangeList);

imageMap.set('tetris-menu', tetrisMenu);
imageMap.set('tetris-gameplay', tetrisGameplay);
imageMap.set('tetris-colorblind', tetrisColorBlind);
