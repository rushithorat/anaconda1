var menubutton = document.querySelector('.Rushi');
var midnav = document.querySelector('.mid');

menubutton.addEventListener("click", function() {
    midnav.classList.toggle('down');
})


var tl= gsap.timeline()

tl.from('.left',{
    y:-50,
    opacity:0,
    duration:0.5,
    delay:.5
})

tl.from('.mid a',{
    y:-50,
    opacity:0,
    duration:.3,
    delay:.5,
    stagger:.3
})
tl.from('.signin',{
    y:-50,
    opacity:0,
    duration:0.3,
    delay:.3
})
tl.from('.contactsales',{
    y:-50,
    opacity:0,
    duration:0.2,
    delay:.3
})
tl.from('.upper-contain',{
    scale:0,
    opacity:0,
    duration:.3,
    delay:.5
})
tl.from('.lower-contain2',{
    scale:0,
    opacity:0,
     duration:.3,
     delay:1,
     scrollTrigger:{
        trigger:'lower-contain2',
        scroller:'body',
        end:"100% 30%",
        start:"100% 80%",
        scrub:2
     }
})

tl.from('.img',{
    x:-100,
    opacity:0,
    duration:.5,
    delay:1,
    scrollTrigger:{
        trigger:'.img',
        scroller:'body',
        scrub:2
    }
})
tl.from('.r',{
    x:100,
    opacity:0,
    duration:.5,
    delay:1,
    scrollTrigger:{
        trigger:'.r',
        scroller:'body',
        scrub:2
    }
})
tl.from('.c1',{
    scale:0,
    opacity:0,
    duration:.5,
    delay:1,
    scrollTrigger:{
        trigger:'.c1',
        scroller:'body',
        
        end:"100% 40%",
        start:"100% 80%",
        scrub:2
    }
})
tl.from('.c2',{
    scale:0,
    opacity:0,
    duration:.5,
    delay:1,
    scrollTrigger:{
        trigger:'.c2',
        scroller:'body',
        
        end:"100% 40%",
        start:"100% 80%",
        scrub:2
    }
})
tl.from('.n1',{
    y:-100,
    opacity:0,
    duration:.5,
    delay:1,
    scrollTrigger:{
        trigger:'.n1',
        scroller:'body',
        
        end:"100% 60%",
        start:"100% 90%",
        scrub:2
    }
})
tl.from('.n2',{
y:-100,
    opacity:0,
    duration:.5,
    delay:1,
    scrollTrigger:{
        trigger:'.n2',
        scroller:'body',
        
        end:"100% 60%",
        start:"100% 90%",
        scrub:2
    }
})

tl.from('.cloud1',{
    x:-100,
        opacity:0,
        duration:.5,
        delay:1,
        scrollTrigger:{
            trigger:'.cloud1',
            scroller:'body',
            
            end:"100% 80%",
            start:"100% 100%",
            scrub:2
        }
    })
    tl.from('.cloud2',{
        x:100,
            opacity:0,
            duration:.5,
            delay:1,
            scrollTrigger:{
                trigger:'.cloud2',
                scroller:'body',
                
                end:"100% 80%",
                start:"100% 100%",
                scrub:2
            }
        })
        tl.from('.card1',{
            y:200,
            opacity:0,
            duration:0.5,
            scrollTrigger:{
                trigger:'.card1',
                scroll:'.body',
                start:"60% 100%",
                end:"60% 80%",
              
                scrub:2
               
        
            }
         })
         tl.from('.card2',{
            y:-200,
            opacity:0,
            duration:0.5,
            scrollTrigger:{
                trigger:'.card2',
                scroll:'.body',
                start:"60% 100%",
                end:"60% 80%",
                scrub:2
         
        
            }
         })
         tl.from('.card3',{
            y:200,
            opacity:0,
            duration:0.5,
            scrollTrigger:{
                trigger:'.card3',
                scroll:'.body',
                start:"60% 100%",
                end:"60% 80%",
        
                scrub:2
              
            }
         })
         
        
         tl.from('.card21',{
            y:-200,
            opacity:0,
            duration:0.5,
            scrollTrigger:{
                trigger:'.card21',
                scroll:'.body',
                start:"60% 80%",
                end:"60% 50%",
                scrub:2
              
        
            }
         })
         tl.from('.card22',{
            y:100,
            opacity:0,
            duration:0.2,
            scrollTrigger:{
                trigger:'.card22',
                scroll:'.body',
                start:"60% 80%",
                end:"60% 50%",
                scrub:1
                
        
            }
         })
         tl.from('.card23',{
            y:-200,
            opacity:0,
            duration:0.5,
            scrollTrigger:{
                trigger:'.card23',
                scroll:'.body',
                start:"60% 80%",
                end:"60% 50%",
                scrub:2
            
        
            }
         })
         tl.from('.twoleft',{
            x:-300,
            opacity:0,
            duration:0.5,
            scrollTrigger:{
                trigger:'.twoleft',
                scroll:'.body',
                scrub:2,
                start:"60% 90%",
                end:"60% 50%"
        
            }
         })
         tl.from('.tworight',{
            x:300,
            opacity:0,
            duration:0.5,
            scrollTrigger:{
                trigger:'.tworight',
                scroll:'.body',
                scrub:2,
                start:"60% 90%",
                end:"60% 50%"
        
            }
         })
         
         tl.from('.icon',{
            x:-250,
            opacity:0,
            duration:0.5,
            scrollTrigger:{
                trigger:'.icon',
                scroll:'.body',
                scrub:2,
                end:"0 70%"
            }
         })
         tl.from('.right-foot-one',{
            x:-250,
            opacity:0,
            duration:0.5,
            scrollTrigger:{
                trigger:'.right-foot-one',
                scroll:'.body',
                scrub:1,
                end:"0 70%"
            }
         })
         tl.from('.right-foot-two',{
            y:300,
            opacity:0,
            duration:0.5,
            scrollTrigger:{
                trigger:'.right-foot-two',
                scroll:'.body',
                scrub:1,
                end:"0 70%"
            }
         })
         tl.from('.right-foot-three',{
            x:200,
            opacity:0,
            duration:0.5,
            scrollTrigger:{
                trigger:'.right-foot-three',
                scroll:'.body',
                scrub:1,
                end:"0 70%"
            }
         })
         tl.from('.right-foot-four',{
            x:250,
            opcity:0,
            duration:0.5,
            scrollTrigger:{
                trigger:'.right-foot-four',
                scroll:'.body',
                scrub:1,
                end:"0 70%"
            }
         })