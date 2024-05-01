import BlogPost from "../pages/BlogPost";

export const ROUTES = {
    home : {
        path : "/",
        title : "Home"
    },
    about : {
        path : "/about",
        title : "About"
    },
    contact : {
        path : "/contact",
        title : "Contact"
    }, 
    blog : {
        path : "/blog",
        title : "Blog"
    },
    blogPost : {
        path : "/blog/:postId",
        title : "Posts"
    }
}