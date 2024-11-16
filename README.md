# Movie Listings App

This is a simple movie listings app that allows users to view a list of movies, search for movies using their names, and view their details. The app is built using React, TypeScript, React Query, and Tailwind CSS.

## Technical Decisions

### React Query

I used React Query to handle data fetching and caching because it provides most of the features that I need out of the box, such as caching, loading states, error handling, and pagination. These features are also provided by other libraries like RTK Query which i was considering using, but React Query was more lightweight and I didn't need the extra features that Redux provides.

### Tailwind CSS

I used Tailwind CSS for styling because it gives me the flexibility to style components quickly without having to write CSS from scratch. It also provides a lot of powerful utilities like group, snap, and responsive utility variants which makes it easy to create responsive designs.

### Choosing APIs from The Movie Database (TMDb)

I switch between the search and discover API endpoints from TMDb based on query parameters as I couldn't find an API that provides all movies and handles search at the same time. The search API handles movie searches by name but returns an empty array when given no search parameter, while the discover API doesn't handle search by name and is used for general browsing. This ensures the app can effectively manage both specific searches and general discovery.

## Trade-offs

### Skeletons over other loading indicators (e.g. spinners, progress bars)

I used skeletons instead other loading indicators because it provides a seamless transition between loading and loaded states, which also gives the user an idea of the layout of the content that is being loaded, skeletons also gives a sense of progress to the user. However, skeletons can be more complex to implement and get right specially for bigger pages and components compared to other loading indicators.

## Example Usage

### Browsing

### Search for movies

### View movie details

## Possible Improvements

- More filtering options
- Display more movie details (e.g. video trailers, reviews, recommendations)
- Add theme switcher (light/dark mode)
