window.onload = function() {
    var top = document.getElementById('top');
    top.innerHTML = '<a href="index.html"><img src="./team/T1_red.png" width="220px" alt=""></a>'

    var list = document.getElementById('list');
    list.innerHTML += '<li><a href="index.html">Main</a></li>';
    list.innerHTML += '<li><a href="team.html">Team</a></li>';
    list.innerHTML += '<li><a href="members.html">Members</a></li>';
    list.innerHTML += '<li><a href="msi.html">2022MSI</a></li>';
    list.innerHTML += '<li><a href="v10.html">V10</a></li>';

    var bottom = document.getElementById('bottom');

    bottom.style.textAlign = 'center';
    bottom.innerHTML = '<img src="./team/bmw.png" width="65px" alt="">';
    bottom.innerHTML += '<img src="./team/celebe.png" width="65px" alt="">';
    bottom.innerHTML += '<img src="./team/douyu.png" width="65px" alt="">';
    bottom.innerHTML += '<img src="./team/hana-bank.png" width="65px" alt="">';
    bottom.innerHTML += '<img src="./team/klevv.png" width="65px" alt="">';
    bottom.innerHTML += '<img src="./team/nike.png" width="65px" alt="">';
    bottom.innerHTML += '<img src="./team/Omen.png" width="65px" alt="">';
    bottom.innerHTML += '<img src="./team/redbull.png" width="65px" alt="">';
    bottom.innerHTML += '<img src="./team/samsung.png" width="65px" alt="">';
    bottom.innerHTML += '<img src="./team/Secret-Lab.png" width="65px" alt="">';
    bottom.innerHTML += '<img src="./team/SKTelecom.png" width="65px" alt="">';
    bottom.innerHTML += '<img src="./team/steelseries.png" width="65px" alt="">';
    bottom.innerHTML += '<h4>Copyright <i class="fa-solid fa-copyright"></i> Kim Sung-Jun All rights reserved.</h4>';
    bottom.innerHTML += '<p>Contact webmaster for more information. kmymy00@naver.com<p>';

    var top_button = document.getElementById('top_button');
    top_button.innerHTML ='<a id="back_to_top" href="#"><i class="fa-solid fa-2x fa-angle-up"></i></a>'
}
function darkmode() {
    var body = document.querySelector('body');
    body.style.background = 'black';
    body.style.color = 'white';
}