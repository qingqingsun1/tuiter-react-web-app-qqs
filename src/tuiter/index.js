// // import {Link}
// //   from "react-router-dom";
// import Nav from "../nav";
// import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
// import PostSummaryItem from "./post-summary-list/post-summary-item";
import React from "react";
import WhoToFollowList from "./who-to-follow-list";
import NavigationSidebar from "./navigation-sidebar";
import ExploreComponent from "./explore";


function Tuiter() {
  return(
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active="explore"/>
        </div>
        <div className="col-10 col-md-10 col-lg-7 col-xl-6"
             style={{"position": "relative"}}>
          <ExploreComponent/>
        </div>
        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList/>
        </div>
      </div>

      // <div>
      //   {/*<Link to="/">Lab</Link> |*/}
      //   {/*<Link to="/hello">Hello</Link> |*/}
      //   {/*<Link to="/tuiter">Tuiter</Link>*/}
      //   <Nav/>
      //   <NavigationSidebar active="home"/>
      //   <WhoToFollowListItem who={{
      //     userName: 'NASA', handle: 'NASA',
      //     avatarIcon: 'nasa.png',
      //   }}/>
      //   <WhoToFollowListItem who={{
      //     userName: 'Tesla', handle: 'tesla',
      //     avatarIcon: 'tesla.png',
      //   }}/>
      //   <WhoToFollowListItem who={{
      //     userName: 'SpaceX', handle: 'SpaceX',
      //     avatarIcon: 'spacex.png',
      //   }}/>
      //   <PostSummaryItem/>
      //   <PostSummaryItem post={{
      //     topic: "Space", userName: "SpaceX",
      //     title: "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
      //     time: "2h", image: "spacex.png"
      //   }}/>
      //   <PostSummaryItem post={{
      //     topic: "Energy", userName: "Tesla",
      //     title: "Tesla FSD finally makes driving obsolete.After years of delay, Tesla Full Self Driving can drive you to work while you work, play, or sleep",
      //     time: "4d", image: "tesla.png"
      //   }}/>
      //   <ExploreComponent/>
      //   <h1>Tuiter</h1>
      // </div>

  );
}
export default Tuiter