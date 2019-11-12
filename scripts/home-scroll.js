//Init Scroll Magic
var controller = new ScrollMagic.Controller();


//Scene Play Button
var ourScene = new ScrollMagic.Scene({
    triggerElement: '#divider'
})
.setClassToggle('.playbutton', 'change') 
.addTo(controller);

//Scene Play Text
var ourScene = new ScrollMagic.Scene({
    triggerElement: '#divider'
})
.setClassToggle('.video-text', 'change')
.addTo(controller);

//Scene Top Image in Design Section 
var ourScene = new ScrollMagic.Scene({
    triggerElement: '#design-title'
})
.setClassToggle('#top-img', 'change')
.addTo(controller);

//Scene Bottom Image in Design Section 
var ourScene = new ScrollMagic.Scene({
    triggerElement: '#design-copy'
})
.setClassToggle('#bottom-img', 'change')
.addTo(controller);

//Scene Bottom Image in Design Section 
var ourScene = new ScrollMagic.Scene({
    triggerElement: '#bottom-img'
})
.setClassToggle('#blog-title', 'change')
.addTo(controller);

//Scene Bottom Image in Design Section 
var ourScene = new ScrollMagic.Scene({
    triggerElement: '#bottom-img'
})
.setClassToggle('#blog-sub', 'change')
.addTo(controller);


