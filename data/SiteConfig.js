module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "mikqi", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Muhammad Rivki Blog", // Site title.
  siteTitleAlt: "Front-End Engineer", // Alternative site title for SEO.
  siteLogo: "/logos/avatar.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://blog.rivki.id", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription: "Muhammad Rivki, a Frontend Engineer from Jakarta, Indonesia. who loves simplicity, create great looking web products and performance first.", // Website description used for RSS feeds/meta description tag.
  // siteCover: "", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Muhammad Rivki", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 5, // The max number of posts per page.
  googleAnalyticsID: "UA-101975024-1", // GA tracking ID.
  disqusShortname: "mikqi", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://github.com/mikqi",
    "https://twitter.com/__mikqi",
    "mailto:muhammad.rivki@live.com"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/mikqi",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Twitter",
      url: "https://twitter.com/__mikqi",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:muhammad.rivki@live.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Muhammad Rivki", // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    url: "https://this.rivki.id/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#2199e8", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
