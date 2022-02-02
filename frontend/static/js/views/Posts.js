import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Projects")
    }

    async getHtml() {
        return `
        <center>
        
        <div class="col-2">
            
                <ul class="skills" style="margin-top:7px; ">
                    <li style="margin:0px;">
                        <img src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v1.png" style="max-width:40px; min-width: 30px; margin-right:0;"/>
                        <p class="plist">Java</p>
                    </li>
                    <li style="margin:0px;">
                    <img src="https://img.icons8.com/ios-filled/96/000000/html-5--v2.png" style="max-width:40px; min-width: 30px; margin-right:0;"/>
                        <p class="plist">HTML</p>
                    </li>
                    <li style="margin:0px;">
                        <img src="https://img.icons8.com/color/96/000000/css3.png" style="max-width:40px; min-width: 30px; margin-right:0;"/>
                        <p class="plist">CSS</p>
                    </li>
                    <li style="margin:0px;">
                        <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" style="max-width:40px; min-width: 30px; margin-right:0;"/>
                        <p class="plist">JavaScript</p>
                    </li>
                    <li style="margin:0px;">
                        <img src="https://img.icons8.com/color/96/000000/python--v1.png" style="max-width:40px; min-width: 30px; margin-right:0;"/>
                        <p class="plist">Python</p>
                    </li>
                    <li style="margin:0px;">
                        <img src="https://img.icons8.com/color/96/000000/firebase.png" style="max-width:40px; min-width: 30px; margin-right:0;"/>
                        <p class="plist">Firebase</p>
                    </li>
                </ul>
        </div>
        
        
        <!-- this is the layout for all your projects, edit to fit your needs -->
        <div class="whitebox">
            <a target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: black;" href="https://chrome.google.com/webstore/detail/phoebe-notes/hoikdhcpdlhbhfgmcpdhdhbkjhenncje">
            <img src="/static/pictures/phoebe-notes-small-banner-440-280.png" alt="" style="width: 100%;">
            <h1>Phoebe Notes Extension</h1>
            <p>Phoebe is a note taking chrome extension that allows users to simply take notes.</p>
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
        <br>
        <br>
        `;
    }
}