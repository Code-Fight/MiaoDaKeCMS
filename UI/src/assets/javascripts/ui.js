/*jQuery(function(){ 
     $("#dock>li").each(function(index,ele){$(ele).on("click",menuclick)});
})
var menuclick= function (obj)
{
    $("#dock>li").each(function(index,ele){$(ele).attr('class','launcher')});
    $(this).attr('class','active launcher')
}*/
var LoadPage=function(path)
{
    location.href=path;
}

