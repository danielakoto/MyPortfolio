import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("D.A: Profile")
    }

    async getHtml() {
        return `
        <div class="profile">
        <center>
            <div class="whitebox2">
                <img style="border-radius: 5%; width: 25%; margin-top: 30px;" src="/static/pictures/profilepic.jpg" alt="">
                <h1 style="font-size: 28px;">Daniel Akoto</h1>
                <h3>Towson University</h3>
                <h3 style="font-size: 22px; margin-bottom: 5px;">Student</h3>
                <p> I love solving puzzles and problem-solving challenges. I look forward to creating applications that can improve our daily lives and help us live better and happier through technology.</p>
            
                <div class="profile-bottom">
                    <a id="mailto" href="mailto:da.akoto1@gmail.com">da.akoto1@gmail.com</a>
                    <a id="resume" href="../../files/Daniel-Akoto-Resume.10.pdf" target="_blank">Resume</a>
                </div>
            </div>
            <br>
        </center>
        </div>
        `;
    }
}