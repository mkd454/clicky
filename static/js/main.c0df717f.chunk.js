(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"SpongeBob",image:"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",clicked:!1},{id:2,name:"Mr. Krabs",image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",clicked:!1},{id:3,name:"Squidward",image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",clicked:!1},{id:4,name:"Dexter",image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",clicked:!1},{id:5,name:"Courage",image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",clicked:!1},{id:6,name:"Doug Funnie",image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",clicked:!1},{id:7,name:"Bugs Bunny",image:"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",clicked:!1},{id:8,name:"Johnny Bravo",image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",clicked:!1},{id:9,name:"Tommy Pickles",image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",clicked:!1},{id:10,name:"Rocko",image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",clicked:!1},{id:11,name:"Captain Planet",image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",clicked:!1},{id:12,name:"Ickis",image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png",clicked:!1}]},,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(3),c=a.n(o),r=(a(16),a(4)),s=a(5),l=a(8),m=a(6),g=a(9),d=a(7),p=a.n(d);a(17),a(18);var u=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},k=a(1);a(19);var h=function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.handleScoreIncrement(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))},v={footerImage:{width:30},footer:{background:"#6956af",height:"50px",position:"relative",color:"#fff",overflow:"hidden"},bottom:{position:"absolute",marginTop:-100,marginLeft:10}},f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={image:k,score:0,topScore:0},a.handleScoreIncrement=function(e){console.log(k[e-1].clicked);var t=a.state.image;console.log(e);for(var n=0;n<t.length;n++)if(e===t[n].id){console.log("Found it! "+t[n].id);var i=t[n];if(i.clicked){alert("YOU LOSE LOSERRRRRRR"),a.state.score>a.state.topScore&&a.setState({topScore:a.state.score});for(var o=0;o<k.length;o++)k[o].clicked=!1;a.setState({score:0})}else i.clicked=!0,a.setState({score:a.state.score+1}),a.winReset()}var c=a.shuffleArray(t);console.log(c)},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"shuffleArray",value:function(e){for(var t,a=e.length,n=0;a--;)n=Math.floor(Math.random()*(a+1)),t=e[a],e[a]=e[n],e[n]=t;return e}},{key:"winReset",value:function(){if(12===this.state.score){alert("You win! Great Job!"),this.state.score>this.state.topScore&&this.setState({topScore:this.state.score});for(var e=0;e<k.length;e++)k[e].clicked=!1;this.setState({score:0})}}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar navbar-light bg-warning"},"Clicky Game",i.a.createElement("a",{href:"/"},i.a.createElement("button",{className:"btn btn-info"},i.a.createElement("span",null," Reset Game "))),i.a.createElement("span",null,"Score: ",this.state.score," | Top Score: ",this.state.topScore)),i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"jumbotron jumbotron-fluid"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"display-4"},"Clicky Game!"),i.a.createElement("p",{className:"lead"},"Click on an image to earn points, but don't click on any more than once! Try to get all 12!")))),i.a.createElement("main",{className:"container"},i.a.createElement(u,null,this.state.image.map(function(t){return i.a.createElement(h,{id:t.id,key:t.id,clicked:t.clicked,name:t.name,image:t.image,handleScoreIncrement:e.handleScoreIncrement})}))),i.a.createElement("div",{className:"footer navbar-fixed-bottom",style:v.footer},i.a.createElement("div",{style:v.bottom},"Clicky Game!",i.a.createElement("img",{style:v.footerImage,src:p.a,className:"App-logo",alt:"logo"}))))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.c0df717f.chunk.js.map