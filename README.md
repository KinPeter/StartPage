# Chrome StartPage
I got a bit bored of always looking for my favorite bookmarks and of going to different sites to take notes or search for something, so I created an all-in-one startpage for myself.

![Screenshot](/screenshot.jpg)

### Functionalities:
- **"Welcoming"**:
    - stores the users name in local storage
    - gets the current location (city) by IP address
    - fetches the current weather and a short forecast
- **Notes**: 
    - using MySQL database
    - functions: list all, add new, edit, archive, activate, delete 
    - password validation to make any changes
- **Links (tiles)**:
    - all my important and favorite links in one place
    - scrollable tile boxes for different categories
    - cool hover effects for the tiles
    - links served from a database
- **Search boxes**:
    - Google search
    - search in all my bookmarks (from database)
    - Korean-Hungarian dictionary based on my own word list

*I didn't really want to complicate my life with lots of `webkits` so some features I implemented are only working in Chrome. However I only use Chrome so I'm fine with that.*
