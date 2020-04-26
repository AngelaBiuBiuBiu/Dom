function showPic(whichpic) {
    var placeholder = document.getElementById('placeholder')
    var source = whichpic.getAttribute('href')
    var text = whichpic.getAttribute('title')
    placeholder.setAttribute('src', source)
    // placeholder.src = source

    var description = document.getElementById('description')
    // alert(description.nodeValue)    // null
    // alert(description.childNodes[0].nodeValue)  // Choose an image.
    // alert(description.firstChild.nodeValue)
    description.firstChild.nodeValue = text
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName('body')[0]
    console.log(body_element.childNodes)
    // alert(body_element.childNodes.length)
    // alert(body_element.nodeType)
}