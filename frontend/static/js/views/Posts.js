import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("D.A: Projects")
    }

    async getHtml() {
        return `
        <center>
        
        <!-- this is the layout for all your projects, edit to fit your needs -->
        <div class="whitebox">
            <a target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: black;" href="https://chrome.google.com/webstore/detail/phoebe-notes/hoikdhcpdlhbhfgmcpdhdhbkjhenncje">
                <img src="/static/pictures/phoebe-notes-small-banner-440-280.png" alt="" style="width: 100%;">
                <h1>Phoebe Notes Extension</h1>
                <p>A note taking chrome extension that allows users to simply take notes.</p>
            </a>
        </div>
        <br>
        <div class="whitebox">
            <a target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: black;" href=" https://yt-pic-in-pic.web.app">
                <img src="/static/pictures/ytpic.jpg" alt="" style="width: 100%;">
                <h1>Pic-in-Pic</h1>
                <p>Picture in picture on mobile devices without YouTube premium subscription.</p>
            </a>
        </div>
        <br>
        <div class="whitebox">
            <a target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: black;" href="https://havingfun-c94bc.web.app">
                <img src="/static/pictures/havingfunpic.jpg" alt="" style="width: 100%;">
                <h1>Having Fun</h1>
                <p>A game about remembering the numbers.</p>
            </a>
        </div>
        <br>
        <div class="whitebox">
            <a target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: black;" href="https://catchdodgegame.web.app/">
                <img src="/static/pictures/catchpic.jpg" alt="" style="width: 100%;">
                <h1>Catch Dodge Game</h1>
                <p>Catch the black balls and dodge the white balls. Computer Only</p>
            </a>
        </div>
        <br>
        <div class="whitebox">
            <a target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: black;" href="https://landingpagetemplate-edf22.web.app">
                <img src="/static/pictures/landingpic.jpg" alt="" style="width: 100%;">
                <h1>Landing Page Template</h1>
                <p>A template to help build a stunning landing page. Note: This is not a library.</p>
            </a>
        </div>
        </center>
        <br>
        <br>
        `;
    }
}