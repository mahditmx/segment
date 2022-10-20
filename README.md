
  

# Segment.js Library

  

  

segment Library create `segment` menu fast and easy

  

  

  

## Usege

  

for start create a `<div>` and set class `side-menu` and **coustom**  `id`

  

for set **option** frist fill `opone = "my frist option"` and seconds option `optwo ="my seconds option "`

  

by default option one ***active*** if you need can change it whit `active="true"`

  

  

Like this :

  

```HTML
<div  class="side-menu"  id="1"  opone ="all"  optwo ="favorite"  active="true"></div>
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

index.css : https://mahditmx4.pythonanywhere.com/static/lib/Segment/1.0.0/index.css

index.js : https://mahditmx4.pythonanywhere.com/static/lib/Segment/1.0.0/script.js

  

  

### CDN

  

  

```HTML
<link  rel="stylesheet" href="https://mahditmx4.pythonanywhere.com/static/lib/Segment/1.0.0/index.css">
<script  src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
<script  src="https://mahditmx4.pythonanywhere.com/static/lib/Segment/1.0.0/script.js"></script>
```
