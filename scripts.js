    //Video popup:  https://www.reddit.com/r/HTML/comments/31xiwa/html5_video_popup/
        function onVideoClick(theLink) {
            // removed loop
            // document.getElementById("video_pop").volume = 0.5;
            document.getElementById("video_pop").innerHTML = "<video onloadstart=\"this.volume=.3\" autoplay id=\"the_Video\"><source src=\""+theLink+"\" type=\"video/mp4\"></video>";
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
 