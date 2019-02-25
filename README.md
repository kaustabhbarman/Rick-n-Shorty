# map_test
A data visualization project to show regions of Delhi, India with the most auto-rickshaw requests at four different peak times of a day using a choloropleth map. Clicking on the chloropleth map will show the route to reach the selected place from the origin(assumed to be the current location of the driver). The project is helpful for auto-rickshaw drivers to decide where to go in order to maximize their probability to find customers. 

# About the Project
- The project is intended to visualize the average number of requests in Delhi region of India. 
- The darkest shade represents the regions with the most number of requests and it decreases with lighter shade. 
- Clicking on the map results to the route from the origin(assumed to be the current location of the driver) to the selected(clicked) place on the right side map. 
- Different peak times of the day can be selected to view the different demands based on the time of the day.

# Tech Implementation
- Mapbox API has been used to display the world map on the left side.
- JEOJSON data has been parsed into Leaflet.js library to highlight the state Delhi on the map.
- Number of requests from CSV file has further been added to JEOJSON object based on which Leaflet's chloropleth functions has colorized the map. 
