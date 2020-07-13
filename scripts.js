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
            document.getElementById("video_pop").innerHTML = "<video autoplay loop id=\"the_Video\"><source src=\""+theLink+"\" type=\"video/webm\"></video>";
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
    
    