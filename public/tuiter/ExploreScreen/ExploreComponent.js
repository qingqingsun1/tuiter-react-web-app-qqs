import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`

     <div class="row align-items-center">
        <div class="col col-11 position-relative">
          <input class="ps-5 form-control rounded-pill" placeholder="Search Twitter">
          <span class="fas fa-search position-absolute wd-search-tuiter"></span>
        </div>
        
        <div class="col col-1">
          <i class="fas fa-cog float-end fa-2x wd-cog"></i>
        </div>
        
     </div>
     
     <ul class="nav mb-2 mt-2 nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-block">
          <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>
     </ul>
     
     <div class="position-relative">
        <img src="../../images/starship.png" width="100%">
        <h2 class="position-absolute wd-text-in-img">SpaceX's Starship</h2>
     </div>
     
     ${PostSummaryList()}
  `);
}
export default ExploreComponent;