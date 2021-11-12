import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard")
    }

    async getHtml() {
        return `
        <center>
        <div class="row" style="margin-top:30%;">
            <div class="col-1">
                <h1>Hi, I am Daniel</h1>
                <h4>I am currently studying Computer Science at towson University. I love problem solving games and fishing</h4>
            </div>
        </div>
        </center>
        <center>
        
        <div class="col-2">
            
                <ul class="skills" style="margin-top:7px; ">
                    <li style="margin:0px;">
                        <img src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v1.png" style="max-width:45px; min-width: 30px; width:80%;"/>
                        <p class="plist">Java</p>
                    </li>
                    <li style="margin:0px;">
                    <img src="https://img.icons8.com/ios-filled/96/000000/html-5--v2.png" style="max-width:45px; min-width: 30px; width:80%;"/>
                        <p class="plist">HTML</p>
                    </li>
                    <li style="margin:0px;">
                        <img src="https://img.icons8.com/color/96/000000/css3.png" style="max-width:45px; min-width: 30px; width:80%;"/>
                        <p class="plist">CSS</p>
                    </li>
                    <li style="margin:0px;">
                        <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" style="max-width:45px; min-width: 30px; width:80%;"/>
                        <p class="plist">JavaScript</p>
                    </li>
                    <li style="margin:0px;">
                        <img src="https://img.icons8.com/color/96/000000/python--v1.png" style="max-width:45px; min-width: 30px; width:80%;"/>
                        <p class="plist">Python</p>
                    </li>
                    <li style="margin:0px;">
                        <img src="https://img.icons8.com/color/96/000000/firebase.png" style="max-width:45px; min-width: 30px; width:80%;"/>
                        <p class="plist">Firebase</p>
                    </li>
                </ul>
        </div>
        
        </center>
        `;
    }
}