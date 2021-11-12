import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Profile")
    }

    async getHtml() {
        return `
        <a href="https://www.linkedin.com/in/daniel-akoto-101" target="_blank">
        <div class="profile">
        <center>
            <div class="whitebox2">
                <img style="border-radius: 5%; width: 25%; margin-top: 30px;" src="/static/pictures/profilepic.jpg" alt="">
                <h1 style="font-size: 28px;">Daniel Akoto</h1>
                <h3>Towson University</h3>
                <h3 style="font-size: 22px; margin-bottom: 5px;">Student</h3>
                <p> I love solving puzzles and problem-solving challenges. Making programs has opened my mind to endless possibilities, I look forward to creating applications that can improve our daily lives and help us live better and happier through technology.</p>
                <h4 style="font-family: 'Source Sans Pro', sans-serif; float: left; font-style: italic; margin-left: 4%;">Maryland, US</h4>
                <h4>dakoto1@students.towson.edu</h4>
                <div style="margin-bottom: 30px;"></div>
            </div>
        </center>
        </div>
        </a>
        `;
    }
}