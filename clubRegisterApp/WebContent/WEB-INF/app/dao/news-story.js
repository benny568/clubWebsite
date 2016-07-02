System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NewsStory;
    return {
        setters:[],
        execute: function() {
            NewsStory = (function () {
                function NewsStory(nsid, category, title, description, story, image) {
                    this.nsid = nsid;
                    this.category = category;
                    this.title = title;
                    this.description = description;
                    this.story = story;
                    this.image = image;
                }
                return NewsStory;
            }());
            exports_1("NewsStory", NewsStory);
        }
    }
});
//# sourceMappingURL=news-story.js.map