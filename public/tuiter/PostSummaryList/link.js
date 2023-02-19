import PostSummaryList from "./index.js";

function exploreComponent() {
       $('#wd-explore').append(`

              
              <div class="col-10 col-lg-7 col-xl-6 bg-primary text-white">
<!--              <h3>ExploreComponent</h3>-->
                  ${PostSummaryList()}

              </div>

       `);
}
$(exploreComponent);