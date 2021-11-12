import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard")
    }

    async getHtml() {
        return `
        <center>
        <div class="row">
            <div class="col-1">
                <h1>Welcome to Daniel's portfolio</h1>
                <h4>It is nice to have you here, please feel free <br>to explore my projects</h3>
            </div>
        </div>
        <div class="col-2">
            <center>
                <p>Currently enrolled at Towson University with a passion for creating programs and apps. I graduate May 2022. I am currently looking for entry positions.</p>
            </center>
        </div>
        </center>

        <a href="https://www.linkedin.com/in/daniel-akoto-101" target="_blank">
        <div class="profile">
        <center>
            <div class="whitebox2">
                <img style="border-radius: 5%; width: 25%; margin-top: 30px;" src="/static/pictures/profilepic.jpg" alt="">
                <h1 style="font-size: 28px;">Daniel Akoto</h1>
                <h3 style=" margin-left: 4%; ">Towson University</h3>
                <h3 style=" margin-left: 4%; font-size: 22px; margin-bottom: 5px;"> Student</h3>
                <p> I love solving puzzles and problem-solving challenges. Making programs has opened my mind to endless possibilities, I look forward to creating applications that can improve our daily lives and help us live better and happier through technology.</p>
                <h4 style="font-family: 'Source Sans Pro', sans-serif; float: left; font-style: italic; margin-left: 4%;">Maryland, US</h4>
                <h4>sult4nbiz@gmail.com</h4>
                <div style="margin-bottom: 30px;"></div>
            </div>
            
        </center>
        </div>
        </a>
        
        <center>
        <!-- this is the layout for all your projects, edit to fit your needs -->
        <div class="whitebox">
            <a target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: black;" href="https://algo-5b306.web.app">
            <img src="/static/pictures/phoebepic.jpg" alt="" style="width: 100%;">
            <h1>Phoebe Notes</h1>
            <p>Phoebe is a note taking app that allows users to sign in with google ( more methods will be accepted later ). Notes are stored in firebase database.</p>
            </a>
        </div> 
        <div class="whitebox">
            <a target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: black;" href=" https://yt-pic-in-pic.web.app">
            <img src="/static/pictures/ytpic.jpg" alt="" style="width: 100%;">
            <h1>Pic-in-Pic</h1>
            <p>Picture in picture on mobile devices without YouTube premium subscription. This is a mobile app and only works for chrome based apps(chrome, edge, firefox, etc) THIS APP DOES NOT WORK ON SAFARI</p>
        </a>
        </div>
        <div class="whitebox">
            <a target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: black;" href="https://havingfun-c94bc.web.app">
            <img src="/static/pictures/havingfunpic.jpg" alt="" style="width: 100%;">
            <h1>Having Fun</h1>
            <p>A game about remembering the numbers The game gets harder as you memorize faster and faster</p>
        </a>
        </div>
        <div class="whitebox">
            <a target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: black;" href="https://catchdodgegame.web.app/">
            <img src="/static/pictures/catchpic.jpg" alt="" style="width: 100%;">
            <h1>Catch Dodge Game</h1>
            <p>Catch the black balls and dodge the white balls. THIS GAME IS NOT MOBILE FRIENDLY</p>
        </a>
        </div>
        <div class="whitebox">
            <a target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: black;" href="https://landingpagetemplate-edf22.web.app">
            <img src="/static/pictures/landingpic.jpg" alt="" style="width: 100%;">
            <h1>Landing Page Template</h1>
            <p>This is a template to help build a stunning landing page. Note : This is not a library.</p>
        </a>
        </div>
        </center>
        `;
    }
}