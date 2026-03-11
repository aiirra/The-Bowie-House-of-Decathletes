gsap.utils.toArray(".section").forEach(section=>{
  gsap.from(section,{
    opacity:0,
    y:100,
    duration:1,
    scrollTrigger:{
      trigger:section,
      start:"top 80%",
      end:"bottom 60%",
      toggleActions:"play none none none"
    }
  });
});
