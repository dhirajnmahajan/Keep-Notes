let write_note = document.getElementById('write-note');
let add_note = document.getElementById('add-note');
let zero_notes = document.getElementById('zero-notes');
let intro = document.getElementById('intro');

document.getElementById('hamburger').addEventListener('click',()=>{
    let nav = document.getElementsByTagName('nav')[0];
    let search = document.getElementById('searchButton');
    let bars = document.getElementsByClassName('bars');
    if(nav.style.height === '20vh'){
        bars[0].style.transform = "rotate(0deg)";
        bars[1].style.transform = "rotate(0deg)";
        bars[0].style.marginTop = "5px";
        bars[1].style.marginTop = "5px";
        bars[2].style.visibility = "visible";
        bars[0].style.position = "relative";
        bars[1].style.position = "relative";
        bars[2].style.position = "relative";
        nav.style.height = '45px';
    }else{
        bars[0].style.transform = "rotate(45deg)";
        bars[1].style.transform = "rotate(-45deg)";
        bars[0].style.marginTop = "12px";
        bars[1].style.marginTop = "12px";
        bars[2].style.visibility = "hidden";
        bars[0].style.position = "absolute";
        bars[1].style.position = "absolute";
        nav.style.height = '20vh';
    }
});

intro.innerHTML = `
<h1>Dhiraj Mahajan</h1>
<br>
<h3 style="display:inline">Position:</h3> Web Developer <br>
<h3 style="display:inline">College:</h3> Pratap College Amalner

<br>
<h3 style="display:inline">Graduation:</h3> BCA (Bachelor of Computer Application)
<br>
<br>

<h4 style="display:inline">Programming Languages:</h4>HTML, CSS, JS, JAVA, SQL, C, C++, Python
<br>
<br>

<h4 style="display:inline">Technical Skills:</h4> Web Development, WEB Page Design, Competitive Programming
<br>
<br>

<h5> Portfolio Website 
<a style="color:blue" href="https://dhirajnmahajan.github.io/" target="_new"><br> &copy;Dhiraj Mahajan</a>
</h5>

<footer>
       
    </footer>
`;
