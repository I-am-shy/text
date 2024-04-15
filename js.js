const request = new XMLHttpRequest();
let url1 = "https://api.suyanw.cn/api/ksxjj.php?return=json&#1"; // 随机图片
let url2 = "https://api.suyanw.cn/api/wyyrp.php?type=json"; // 随机评论
let url3 = "https://api.suyanw.cn/api/pyq.php?type=json"; // 随机文案

setTimeout(()=>{
    // 图片
    request.open("get",url1);
    request.onload = (e)=>{
        if (request.status === 200 && request.readyState === 4){
            console.log("请求成功");
            let text = request.response;
            let data = JSON.parse(text);    
            console.log(data);        
            let img = document.createElement("img");
            img.src = data.imgurl;
            img.width = Math.min(window.screen.width,data.width) ;
            img.height = Math.min(window.screen.width,data.width)*(data.height/data.width);
            document.body.append(img);
        }
    }
    request.send();
},5000);

let txt = document.getElementById("text");
let shadow = document.getElementById("shadow");
// 文字
request.open("get",url2);
request.onload = (e)=>{
    if (request.status === 200 && request.readyState === 4){
        console.log("请求成功");
        let text = request.response;
        let data = JSON.parse(text);    
        console.log(data);        
        txt.innerText = data.text;
        shadow.children[0].innerText = data.text;
    }
}
request.send();
