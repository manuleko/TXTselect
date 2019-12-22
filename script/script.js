$(".marktrigger").click(function() {
    var selection = getSelText();
    console.log('selected value', selection);
    var range = selection.getRangeAt(0);
    if(selection.toString().length > 2){
        if(getSelText().toString().match(/span/g)){
            $("span").contents().unwrap();
        }else{
            var newNode = document.createElement("span");
            newNode.setAttribute("style", "background-color: yellow;");
            range.surroundContents(newNode);       
        }
    }
    
});

$(".removetrigger").click(function() {
    if(getSelText().toString().length > 2){
        $("span").contents().unwrap();
        $("i").contents().unwrap();
        $("b").contents().unwrap();
        $("u").contents().unwrap();
    }
});
$(".boldtrigger").click(function() {
    var selection = getSelText();
    var range = selection.getRangeAt(0);
    if(selection.toString().length > 2){
        var newNode = document.createElement("b");
        range.surroundContents(newNode);       
    }
});
$(".italictrigger").click(function() {
    var selection = getSelText();
    var range = selection.getRangeAt(0);
    if(selection.toString().length > 2){
        var newNode = document.createElement("i");
        range.surroundContents(newNode);       
    }
});
$(".underlinetrigger").click(function() {
    var selection = getSelText();
    var range = selection.getRangeAt(0);
    if(selection.toString().length > 2){
        var newNode = document.createElement("u");
        range.surroundContents(newNode);       
    }
});

function getSelText()
{
    var txt = '';
     if (window.getSelection)
     { txt = window.getSelection(); }
     else if (document.getSelection)
     { txt = document.getSelection(); }
     else if (document.selection)
     { txt = document.selection.createRange().text; }
    else return;
    return txt;
}

