
# Segment.js menu Library
segment Library create `segment` menu fast and easy
DownLoad and open `index.html` to see and learn how to use
Like this :
![preview lib](https://mahditmx4.pythonanywhere.com/static/img/preview.gif)
## Usege

for start create a `<div>` and set class `side-menu` and **coustom**  `id`


for set **option** frist fill `opone = "my frist option"` and second option `optwo ="my seconds option "`

by default option one ***active*** if you need can change it whit `active="true"`

Like this :

```HTML
<div  class="side-menu"  id="1"  opone ="all"  optwo ="favorite"  active="true"></div>
```
### OnClick Events
  for create `onclick event` just set **actionOne** for option *frist* and **actionTwo** for *second* option 


Like this :
```HTML
<div  class="side-menu"  id="4"  opone ="Action one"  optwo ="Action Two"  actionOne="console.log('Action One clicked!')"  actionTwo="console.log('Action Two clicked!')"></div>
```


## Custom
in frist `<div>` set class `dm` for **DARKMODE**

  
  

like this :

```HTML
<div  class="side-menu dm"  id="1"  opone ="all"  optwo ="favorite"  active="true"></div>
```

  

## Get stats in js

Use `menuStats["your custom id"]` to get ***true*** or ***false***

```JAVASCRIPT
console.log(menuStats)
```

  

output:

```JSON
{
	"1" : true,
	"allOrNew" : false
}
```

  
  

## Installation guid

  
  

import [Jquery](https://jquery.com/download/) and

  

segment.css : https://mahditmx4.pythonanywhere.com/static/lib/Segment/1.0.0/segment.css

  

segment.js : https://mahditmx4.pythonanywhere.com/static/lib/Segment/1.0.0/segment.js

  
  

### CDN

  

```HTML
<!-- style -->
<link rel="stylesheet"href="https://mahditmx4.pythonanywhere.com/static/lib/Segment/1.0.0/segment.css">
<!-- scripts -->
<script  src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
<script  src="https://mahditmx4.pythonanywhere.com/static/lib/Segment/1.0.0/segment.js"></script>
```