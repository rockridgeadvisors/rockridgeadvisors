    // Video Popup: https://www.solodev.com/blog/web-design/how-to-add-pop-up-video-into-a-website.stml
    $( document ).ready(function() 
        { 
            $('#headerVideoLink').magnificPopup(
                { type:'inline', midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href. 
                }
            ); 
        }); 
        //Video popup:  https://www.reddit.com/r/HTML/comments/31xiwa/html5_video_popup/
        function onVideoClick(theLink) {
            // removed loop
            document.getElementById("video_pop").innerHTML = "<video autoplay playsinline id=\"the_Video\"><source src=\""+theLink+"\" type=\"video/mp4\"></video>";
            document.getElementById("video_pop").style.display="block";
        } 

        function onPopClick() {
            document.getElementById("video_pop").style.display="none";
            document.getElementById("video_pop").innerHTML = ""; 
        }         
    // Lightbox
        $(document).on("click", '[data-toggle="lightbox"]', function(event) {
            event.preventDefault();
            $(this).ekkoLightbox();
        });   
 //robsimpson.digital       
        /* Check if the users browser supports these features */
const enhance = 'querySelector' in document && 'addEventListener' in window && 'classList' in document.documentElement;

/* If the users browser browser supports the features we need, remove the no-enhance class from the html element and execute our video JS */
if(enhance) {
  document.documentElement.classList.remove('no-enhance');
    
  /* Find all video molecules and instantiate a new instance of the Video class */
  const videos = document.querySelectorAll('.js-video');
  Array.from(videos).forEach((video) => {
    const videoEl = new Video(video);
  });
}
class Video {
    constructor(video) {
      this.videoContainer = video;
      this.video = this.videoContainer.querySelector('.js-video-video');
      this.playButton = this.videoContainer.querySelector('.js-video-play-button');
      this.pauseButton = this.videoContainer.querySelector('.js-video-pause-button');
          
      this.prefersReducedMotion();
      this.addEventListeners();
    }
      
    prefersReducedMotion() {
      /* If the users browser supports reduced motion and the user has set it to true, remove the autoplay attribute from the video and pause it */
      if(matchMedia('(prefers-reduced-motion)').matches) {
        this.video.removeAttribute('autoplay');
        this.pauseVideo();
      }
    }
      
    addEventListeners() {
      this.playButton.addEventListener('click', () => {
        this.playVideo();
        /* Focus the pause button so keyboard users can immediately pause the video without having to tab away and back again */
        this.pauseButton.focus();
      });
          
      this.pauseButton.addEventListener('click', () => {
        this.pauseVideo();
        /* Focus the play button so keyboard users can immediately play the video without having to tab away and back again */
        this.playButton.focus();
      });
    }
      
    playVideo() {
      this.video.play();
      /* Set the play button as pressed so it's hidden and the pause button is displayed instead */
      this.playButton.setAttribute('aria-pressed', 'true');
      this.pauseButton.setAttribute('aria-pressed', 'false');
    }
      
    pauseVideo() {
      this.video.pause();
      /* Set the pause button as pressed so it&rsquo;s hidden and the play button is displayed instead */
      this.playButton.setAttribute('aria-pressed', 'false');
      this.pauseButton.setAttribute('aria-pressed', 'true');
    }
  }
    
    