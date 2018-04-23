import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import BlogPage from './BlogPage'
import ShopPage from './ShopPage'
import WorkoutPage from './WorkoutPage'
import ContactUs from './ContactUs'

// The Main component renders one of the provided
// Routes (provided that one matches). without 'exact'
// the path name can contain trailing data and still
// link to the provided page
// this can be good for login details or cookies ect

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
	  <Route path='/AboutPage' component={AboutPage}/>
	  <Route path='/BlogPage' component={BlogPage}/>
	  <Route path='/ShopPage' component={ShopPage}/>
	  <Route path='/WorkoutPage' component={WorkoutPage}/>
	  <Route path='/ContactUs' component={ContactUs}/>
    </Switch>
  </main>
)

export default Main
