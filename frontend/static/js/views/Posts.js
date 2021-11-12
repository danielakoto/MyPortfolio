import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Projects")
    }

    async getHtml() {
        return `
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