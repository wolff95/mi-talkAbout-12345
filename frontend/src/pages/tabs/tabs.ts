import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  homeRoot = HomePage;
  searchRoot = SearchPage;
  profileRoot = ProfilePage;
  //settingRoot = SettingPage;
  //challengeRoot = ChallengePage;

  constructor() {

  }
}
