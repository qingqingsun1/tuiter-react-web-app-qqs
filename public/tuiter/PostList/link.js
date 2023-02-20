import PostList from "../PostList/index.js";

function exploreComponent() {
  $('#wd-postList').append(`
              
              <div class="col-10 col-lg-7 col-xl-6 bg-primary text-white">
              <h3>Post Test</h3>
              ${PostList()}
              </div>

       `);
}
$(exploreComponent);