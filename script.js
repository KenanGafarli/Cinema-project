
let videosContainer=document.querySelector('.videos_container');
let popularMovies=document.querySelector('#popular_movies');
let comedyMovies=document.querySelector('#comedy_movies');
let userName=document.querySelector('.user_name');
let logOut=document.querySelector('.username_icon svg');
let leftIcon=document.querySelector('.left_icon')
let rightIcon=document.querySelector('.right_icon')
let leftIcon1=document.querySelector('.left_icon1')
let rightIcon1=document.querySelector('.right_icon1')

if(!localStorage.getItem('loggedInUser')) {
    window.location.href='./login/login.html';
}



userName.innerHTML=JSON.parse(localStorage.getItem('loggedInUser')).name;

logOut.addEventListener('click',()=> {
    window.location.href='./login/login.html';
    localStorage.removeItem('loggedInUser');
})

// Continue Watching
fetch('./api/videos.json')
.then(resp=>resp.json())
.then(data=>{
    console.log(data);
    data.forEach(videoObj=>{
        videosContainer.innerHTML+=`
        <div class="video_card">
            <video controls src="${videoObj.video}"></video>
            <p>${videoObj.title}</p>        
        </div>
        
        `
    })
})


let imgPath = 'https://image.tmdb.org/t/p/w500'

// POPULAR MOVIES
fetch('https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=hard')
.then(resp=>resp.json())
.then(data=>{
    console.log(data);
    data.results.forEach(slider=>{
        popularMovies.innerHTML+=`
                <div class="popular_card">
                    <img class="" src="${imgPath+slider.poster_path}" alt="">
                    <p>${slider.title}</p>
                </div>
        `
    })

    let count=0;
    function slider(){
        for (let i = 0; i < popularMovies.children.length; i++) {
            popularMovies.children[i].style.transform=`translateX(${-300*count}px)`;
            
        }
    }
    setInterval(() => {
        if(count<popularMovies.children.length-4) {
            count++;
            slider();
        }
        else{
            count=0;
            slider()
        }
    }, 3000);

    rightIcon.addEventListener('click',()=> {
        if(count<popularMovies.children.length-4) {
            count++;
            slider();
        }
        else{
            count=0;
            slider()
        }
    })
    leftIcon.addEventListener('click',()=> {
        if(count>0) {
            count--;
            slider();
        }
        else{
            count=0;
            slider()
        }
    })
   
})

// COMEDY MOVIES
fetch('https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=comedy')
.then(resp=>resp.json())
.then(data=>{
    console.log(data);
    data.results.forEach(slider=>{
        comedyMovies.innerHTML+=`
                <div class="popular_card">
                    <img src="${slider.poster_path!==null? imgPath+slider.poster_path: './img/image 1.png'}" alt="">
                    <p>${slider.title}</p>
                </div>
        `
    })

    let count1=0;
    function slider1(){
        for (let i = 0; i < comedyMovies.children.length; i++) {
            comedyMovies.children[i].style.transform=`translateX(${-300*count1}px)`;
            
        }
    }
    setInterval(() => {
        if(count1<comedyMovies.children.length-4) {
            count1++;
            slider1();
        }
        else{
            count1=0;
            slider1()
        }
    }, 3000);

    rightIcon1.addEventListener('click',()=> {
        if(count1<comedyMovies.children.length-4) {
            count1++;
            slider1();
        }
        else{
            count1=0;
            slider1()
        }
    })
    leftIcon1.addEventListener('click',()=> {
        if(count1>0) {
            count1--;
            slider1();
        }
        else{
            count1=0;
            slider1()
        }
    })
   
})




