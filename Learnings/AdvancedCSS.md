# Advanced CSS 
## Image Fixing
```javascript
//HTML
<div class="image-container">
    <img class="img" src=""/>
</div>
//CSS
.image-container{
    width:200px;
    height:200px;
    position:relative;
}
.img{
    height:100%;
    width:100%;
    object-fit:cover;
}
```

## Default star selector properties
```javascript
*{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    font-family:'';
}
```

## Default body properties
```javascript
body{
    height:100vh;
}
```