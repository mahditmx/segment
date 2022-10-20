

$(document).ready(function () {
    globalThis.menuStats = {}
    menus = $(".side-menu").get()
    for (i in menus){
        id = menus[i].id
        opOne = $(`#${id}`).attr("opone");
        opTwo = $(`#${id}`).attr("optwo");

        actionOne = $(`#${id}`).attr("actionOne");
        actionTwo = $(`#${id}`).attr("actionTwo");

        active = $(`#${id}`).attr("active");
        if (active !== "true"){
            menuStats[id] = false
        }else{
            menuStats[id] = true
        }
                        

        $(`#${id}`).append(`<div class="menu-father noselect" id='f-${id}'></div>`);
        $(`#f-${id}`).append(`<div class="menu-move" id='m-${id}' ></div>`);
        $(`#f-${id}`).append(`<span class="op1" id='opf-${id}' onclick="${actionOne}" >${opOne}</span> <span class="op2" id='opt-${id}' onclick="${actionTwo}" >${opTwo}</span>`);
    } 


    for (key in menuStats){
        if (menuStats[key] == true){
            $(`#m-${key}`).css({right:"2px"})
        }
    }


    $(".op2").click(function (e) { 
        moveId = (this.id).split("-")[1]
        if (menuStats[moveId] !== true){
            $(`#m-${moveId}`).attr("style","")
            .animate({right:"2px"},100)
            menuStats[moveId] = true            
        }

    });
    $(".op1").click(function (e) { 
        moveId = (this.id).split("-")[1]
        $(`#m-${moveId}`).animate({left:"0px"},100)
        setTimeout(() => {
            $(`#m-${moveId}`).attr("style", "");
        }, 100);
        menuStats[moveId] = false
    });
});
