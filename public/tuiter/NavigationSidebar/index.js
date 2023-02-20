const NavigationSidebar = () => {
  return(`

   <div class="list-group" id="navbar">
     <a class="list-group-item" href="/" id="tuiter">
       <i class="fab fa-twitter"></i></a>
       
       <! -- continue rest of list, e.g.,Home, Explore, Notifications, Messages, etc. -->
      <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action" id="homescreen">
        <i class="fas fa-home"></i>
        <div class="d-none d-xl-inline">Home</div>
      </a>
      
      <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action" id="explorescreen">
        <i class="fas fa-hashtag"></i>
        <div class="d-none d-xl-inline">Explore</div>
      </a>
      
      <a href="notifications.html" class="list-group-item list-group-item-action" id="notifications">
        <i class="fas fa-bell"></i>
        <div class="d-none d-xl-inline">Notifications</div>
      </a>
      
      <a href="messages.html" class="list-group-item list-group-item-action" id="messages">
        <i class="fas fa-envelope"></i>
        <div class="d-none d-xl-inline">Messages</div>
      </a>
      
      <a href="../bookmarks/index.html" class="list-group-item list-group-item-action" id="bookmarks">
        <i class="fas fa-bookmark"></i>
        <div class="d-none d-xl-inline">Bookmarks</div>
      </a>
      
      <a href="lists.html" class="list-group-item list-group-item-action" id="lists">
        <i class="fas fa-list"></i>
        <div class="d-none d-xl-inline">Lists</div>
      </a>
      
      <a href="../profile.html" class="list-group-item list-group-item-action" id="profile">
        <i class="fas fa-user"></i>
        <div class="d-none d-xl-inline">Profile</div>
      </a>
      <a href="more.html" class="list-group-item list-group-item-action" id="more">
        <span class="position-relative">
          <i class="fas fa-circle"></i>
          <i class="fas fa-ellipsis-h position-absolute wd-more-icon fa-xs" style="color: white"></i>
        </span>
        <div class="d-none d-xl-inline">More</div>
      </a>
      
        <script>
        if (window.location.pathname.endsWith("/")) {
          $('#tuiter').addClass('active');
        }
        if (window.location.pathname.endsWith("HomeScreen/index.html")) {
          $('#homescreen').addClass('active');
        }
        if (window.location.pathname.endsWith("ExploreScreen/index.html")) {
          $('#explorescreen').addClass('active');
        }
        if (window.location.pathname.endsWith("notifications.html")) {
          $('#notifications').addClass('active');
        }
        if (window.location.pathname.endsWith("bookmarks/index.html")) {
          $('#bookmarks').addClass('active');
        }
        if (window.location.pathname.endsWith("lists.html")) {
          $('#lists').addClass('active');
        }
        if (window.location.pathname.endsWith("profile.html")) {
          $('#profile').addClass('active');
        }
        if (window.location.pathname.endsWith("more.html")) {
          $('#more').addClass('active');
        }
      </script>
      
   </div>
   
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

// const NavigationSidebar = () => {
//   return(`
// <div class="list-group">
// <a class="list-group-item" href="/">
// <i class="fab fa-twitter"></i></a>
// <!-- continue rest of list, e.g.,
// Home, Explore, Notifications, Messages, etc. -->
// </div>
// <div class="d-grid mt-2">
// <a href="tweet.html"
// class="btn btn-primary btn-block rounded-pill">
// Tweet</a>
// </div>
// `);
// }
// export default NavigationSidebar;