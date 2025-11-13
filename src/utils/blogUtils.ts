import { BlogPost } from '@/types/blog';

// This function will be used to get blog metadata from the actual blog files
export const getBlogPosts = (): BlogPost[] => {
  // Define all blog posts with their metadata
  // This is the single source of truth for blog listing
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      slug: "best-restaurant-consultant-in-lucknow",
      title: "Goalcraft Consultancy: The best Restaurant Consultant in Lucknow",
      description: "Looking for the best restaurant consultant in Lucknow? GoalCraft experts help restaurants grow sales on Swiggy and Zomato, optimize menus, and improve online visibility for maximum profits.",
      category: "Restaurant Growth in Lucknow",
      readTime: "8 min read",
      author: "GoalCraft Team",
      publishedDate: "2024-01-15T00:00:00Z",
      bannerImage: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "TrendingUp"
    },
    
    {
      id: "2",
      slug : "How-to-grow-a-restaurant-business",
      title: "How to Grow Food Business on Zomato and Swiggy – Proven Strategies",
      description: "Your Growth Partner: Scale Your Food Business on Zomato and Swiggy",
      category: "Growth stategy",
      readTime: "7 min read",
      author: "GoalCraft Team",
      publishedDate: "2024-01-25T00:00:00Z",
      bannerImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Users"
    },
   {
  id: "3",
  slug: "How-to-grow-restaurant-on-zomato-and-swiggy.html",
  title: "How-to-grow-restaurant-on-zomato-and-swiggy.html",
  description: "Discover actionable restaurant growth strategies to increase sales, attract loyal customers, and build your online presence in 2025.",
  category: "Growth Strategy",
  readTime: "8 min read",
  author: "GoalCraft Team",
  publishedDate: "2024-02-10T00:00:00Z",
  bannerImage: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800",
  icon: "Utensils"
}

  ];

  return blogPosts;
};
