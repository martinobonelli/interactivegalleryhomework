
function upDate(previewPic) {
    
    const image = document.getElementById('image');
    
    
    
    console.log("Image src:", previewPic.src);

    console.log("Image alt:", previewPic.alt);
    



    image.style.backgroundImage = `url('${previewPic.src}')`;
    
    image.textContent = previewPic.alt;

}




	function unDo(){
  
    const image = document.getElementById('image');

    image.style.backgroundImage = '';

    image.textContent = 'Hover over an image';

    }
		
