# Movie Search Application

## Project Overview
This is a simple movie search application that allows users to find movies using The Movie Database (TMDB) API. The app is designed to be user-friendly and visually appealing, thanks to Tailwind CSS. It includes a search feature that uses a debounce function to improve performance.

## Technologies Used
- **Loader Debounce**: This feature helps to reduce the number of API calls made while the user types in the search box. It waits for a short period after the user stops typing before sending a request to the API. This way, we avoid making too many requests and improve the app's speed.

- **The Movie Database (TMDB) API**: We use this API to get information about movies, such as their titles, posters, ratings, and release dates. You can search for any movie and see its details.

- **Tailwind CSS**: This is a utility-first CSS framework that makes it easy to style the application. It allows us to create responsive designs quickly and efficiently.

## Installation
To set up the project on your local machine, follow these steps:
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   
Navigate to the project directory:
cd <project-directory>
Install the required dependencies:
npm install
Usage
To run the application, use the following command:

npm start
Then, open your web browser and go to http://localhost:3000 to start using the app.

Contributing
If you want to contribute to this project, feel free to open an issue or submit a pull request. Your contributions are welcome!

License
This project is licensed under the MIT License.