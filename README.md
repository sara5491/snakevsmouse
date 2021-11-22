# SNAKE VS MOUSE

<a href="https://sara5491.github.io/snakevsmouse/">Play the game</a>
'Snake vs Mouse' is an online game inspired by the classic 'Snake' video game where the user tries to eat as much 'food' as they can without running into the tail of the snake. It is a very simple concept but very addictive!

![Am I Responsive? image of website on different devices](docs/amiresponsive.png)

The idea is to guide the snake using the arrows on a keyboard or the controls on the screen to try and eat as many 'mice'
as possible. Each time a mouse is eaten, the snake grows longer and a point is scored.

## TABLE OF CONTENTS

## PLANNING
### Project Goals
The aim is to create an interactive, fun game that is easy to play. It should be enjoyable so players want to play it
again and again.

### User Goals
The game should be simple enough that it can be played during a short period e.g. while in a doctor's waiting room or on a work break. It should entice the user to keep coming back to it, to try and beat their high score.

### User Stories
- As a user I want to immediately understand how to play the game.
- As a user I want to be able to see my progress (via scores).
- As a user I want to be able to complete the game within a short time frame.
- As a user I want to view game instructions, if necessary.
- As a user I want to play the game on a mobile phone or computer.
- As a user I want to play a simple and straightforward game.

### Design Goals
I wanted to create a game that is easy to use, can be played on multiple devices, has simple controls and is designed with complementary colours.

### Design Choices
#### Layout
- The game area is in the centre of the page, with the 'snake' displayed as green cells and the 'food' displayed as an image of a mouse.
- The player's current score, their high score, the audio player button and the instructions are clearly shown above the game area.
- The instructions open in a container when the ? icon is clicked on.
- Arrows which can be used to control the snake on both computers and mobile devices are displayed underneath the game area.
- A pause button is displayed alongside the arrow controls. The game can also be paused (and started again) by pressing the spacebar.
- A footer with social media links is shown at the bottom of the page on all devices.
- A lilac half-oval shape with a shadow is the main feature of the background which gives the page more depth.

#### Font
I used only one font throughout - Londrina Solid. It has a playful, youthful feel which suits the design of the page.

#### Colours
I wanted to choose pastel, 'feminine' colours as a contrast to the original 'Snake' game which I remember being very dark, plain with almost garish red and green colours.
I used <a href="https://coolors.co">Coolors</a> to generate a colour palette - shades of pinks and purples - which are calming and pleasant.
![Coolors colour palette](docs/coolors.png)

#### Images
I used an image of a mouse, rather than a plain coloured cell as the 'food' because I felt like it gives the game a bit of humour. I also think it makes it different from the other Snake games that are out there. I used a snake favicon so if a user has lots of tabs open in their browser, it is obvious which tab is the game.

#### Audio
There are two different sounds within the game - a squeak when the snake eats a mouse and a negative 'bong' sound when the snake runs into itself and it's game over. The audio is muted when the game begins but can be toggled on and off by clicking on the speaker icon.

#### Wireframes

## FEATURES
#### Current features
- I created a popup using <a href="https://sweetalert2.github.io/">SweetAlert</a> for when the snake touches its tail and the game is over.
- There are no 'walls' in the game area. This makes each game last longer as it is easier to play than when the snake is confined to a small square.
- High scores - each player's score is saved in local storage so if the game is ended and returned to at a later date, the player's high score is still there. This will encourage users to return to the game.

#### Future implementation
- Leaderboard
- Customisation - difficulty/colours/speed
- Touch screen controls
- Obstacles
- Snake head

## TESTING
#### Responsiveness
#### Lighthouse
#### Validators

## BUGS
#### Fixed Bugs
- Mouse appearing in same cell as snake

#### Known Bugs
- Squeak sound

## TECHNOLOGIES USED
#### Languages
- HTML
- CSS
- JavaScript

#### Libraries/Online Resources
- Google Fonts
- Font Awesome
- Favicon
- Balsamiq
- Coolors
- Chrome DevTools
- Am I Responsive?
- Sweet Alert
- MixKit - https://mixkit.co/


## DEPLOYMENT
The project was created in GitPod and deployed to GitHub using the following steps:

1. Log into GitHub
2. Locate the repository (sara5491/snakevsmouse)
3. Click ‘Settings’ and locate ‘Pages’ on the left-hand side
4. Under ’Source’ select ‘Branch: Main’ and click ‘Save’
5. Wait a few minutes for the site to be deployed. It will be accessible at: https://sara5491.github.io/snakevsmouse/


Forking a repository - this allows you to contribute to someone else's project

1. Log into GitHub
2. Locate the repository
3. Click ‘Fork’ at the top right-hand corner of the page
4. This creates a copy of the repo in your own GitHub account

Cloning a repository

1. Locate the repository
2. Above the files, locate the ‘Code’ button
3. To clone the repository using HTTPS, copy the link under 'Clone with HTTPS’
4. Open a terminal
5. Change the working directory to the location you want the cloned directory to be made to
6. Type ‘git clone’ and paste the URL you have copied
7. Press ‘enter’ to create your clone

Instructions from [GitHub Docs](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories)

## CREDITS
#### Content
#### Media
#### Thanks
