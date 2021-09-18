


## Table of Contents

- [Project Walk-Through](#project-walk-through)
  - [Home Page](#home-page)
  - [Sign-in Page](#sign-in-page)
  - [Sign-up Page](#sign-up-page)
  - [Browse Page](#browse-page)
- [Technology Used](#technology-used)




# Project Walk-Through

 # Home Page

<div align="center"><a name="menu"></a>

![ScreenShot](/public/images/readme/5.jpg)
![ScreenShot](/public/images/readme/6.jpg)
![ScreenShot](/public/images/readme/7.jpg)
![ScreenShot](/public/images/readme/8.jpg)
![ScreenShot](/public/images/readme/9.jpg)
![ScreenShot](/public/images/readme/10.jpg)
</div>

The Home Page consists of 5 main sections:

***1) Header, which includes:***
- Logo: 
it redirects you to the home page when you click on it.

- Sign-in button: 
 it redirects you to the sign-in page.

- Feature title & subtitle:
It shows the main sentences of the website.

***2) Optform:***
It's a text input field and a button,  It redirects you to the sign-up page once you click on the button.

***3) Jumbotron:***
This section contains some images and paragraphs beside it, showing the advantages of Netflix. The data of this Jumbotron came from jumbo.json file.

***4) Frequently Asked Questions:***
This section contains the FAQs in a form of accordion, when you click anywhere in the gray area of the question the answer appears below it, and then you can close the answer by clicking again on the same gray area of the question. The data of these FAQs came from faqs.json file.

***5) Footer:***
It contains useful links users may need it.


***### The page is fully responsive to all mobile devices even the small ones. ###***

 # Sign-in Page
 
 <div align="center"><a name="menu"></a>

![ScreenShot](/public/images/readme/11.jpg)
![ScreenShot](/public/images/readme/12.jpg)
</div>

The Sign-in Page consists of 3 main sections:

***1) Header, which includes:***
- Logo: 
it redirects you to the home page when you click on it.

***2) Sign-in Form, which includes:***
- Email address input field.

- Password input field.

- Sign-in Button: It has a validation option, if any field in the form is empty it will be disabled. If the form fields have any data it will be active and will send the data to the firebase database in the backend for authentication. It has also an error handling function.

- Link to Sign-up Page:  it redirects you to the sign-up page. 

***3) Footer:***
It contains useful links users may need it.


***### The page is fully responsive to all mobile devices even the small ones. ###***


 # Sign-up Page
 
<div align="center"><a name="menu"></a>

![ScreenShot](/public/images/readme/13.jpg)
![ScreenShot](/public/images/readme/12.jpg)
</div>

The Sign-up Page consists of 3 main sections:

***1) Header, which includes:***
- Logo: 
it redirects you to the home page when you click on it.

***2) Sign-up Form, which includes:***
- First Name input field.

- Email address input field.

- Password input field.

- Sign-up Button: It has a validation option, if any field in the form is empty it will be disabled. If the form fields have any data it will be active and will send the data to the firebase database in the backend for registration. It has also an error handling function.

- Link to Sign-in Page:  it redirects you to the sign-in page.


***3) Footer:***
It contains useful links users may need it.


***### The page is fully responsive to all mobile devices even the small ones. ###***

 # Browse Page

<div align="center"><a name="menu"></a>

![ScreenShot](/public/images/readme/1.jpg)
![ScreenShot](/public/images/readme/2.jpg)
![ScreenShot](/public/images/readme/3.jpg)
![ScreenShot](/public/images/readme/4.jpg)
</div>

The Browse Page consists of 5 main sections:

***1) Header, which includes:***
- Logo: 
it redirects you to the home page whenever you click it.

- Categories Links: 
It shows the movies of a specific category when you click on it, for example, if you click on the films link it will be active and the browse page will show only the films. And if you click on the series link it will be active and the browse page will show only the series.

- Featured Movie Title & Description:
It shows the title and description of the featured movie.

- Play Button:
it shows the video player to play the movie.


***2) Movies Slides:***
It's a slides shows the movies based on their genre.  The genres and all movie information had been retrieved from the Firebase database.

***3) Movie Card:***
It's an image represent the movie, when you hover over it became bigger and it will show its card feature if you click on it.

***4) Card Feature:***
it's another section that appears under the movie slide if you click on any movie card, it contains more information about the movie like title, description, a special background represent the movie, and play button. when you click on the play button it shows the video player to play the movie. and you can close the card feature by clicking on the close icon in the top right corner of the card feature.

***5) Video Player:***
it's a video player that has full controls, appears in the middle of the screen when you click on any play button, and you have to click on the play icon in the video player after it show up because it doesn't have an autoplay option currently.
And when the video player show up the whole screen became an overlay, and only the video appears in the middle, and when you scroll up and down the video player moves with you.
The video player should show the video of this movie which you clicked on it, but for this project purpose, it shows only one video as a sample for all movies.

You can close the video player anytime by clicking anywhere else on the screen.

<div align="center"><a name="menu"></a>

![ScreenShot](/public/images/readme/14.jpg)

</div>

***6) Footer:***
It contains useful links users may need it.



***### The page is fully responsive to all mobile devices even the small ones. ###***


# Technology Used

I have built this project using the following tools & techniques:
- React.JS
- React Router.
- React Forms.
- React Hooks.
- useState.
- useContext.
- useEffect.
- useHistory.
- useState.
- Compound Components.
- JSX.
- CSS Modules.
- Firebase.
- VSCode.
- StyleLint.
- EsLint.
- Github Actions.
- Github Pages.





