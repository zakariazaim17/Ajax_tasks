// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element


const maaan = document.querySelector('main');




const ul = document.querySelector('ul');

const showImages = async (code) => {
    const mediaArray = await code;
    
    mediaArray.forEach((image) => {
        const li = document.createElement('li');
        const fig = document.createElement('figure');

        const asa = document.createElement('a');
        asa.href ='img'+'/'+'original'+'/'+image.mediaUrl;
       

        const imagee = document.createElement('img');
        imagee.src='img'+'/'+'original'+'/'+image.mediaUrl;
        

        const figcapt = document.createElement('figcaption');
        const h3 = document.createElement('h3');
      
         
        h3.innerHTML=image.mediaTitle;

        figcapt.appendChild(h3);

        asa.appendChild(imagee);

        fig.appendChild(asa);
        fig.appendChild(figcapt);

        li.appendChild(fig);

        ul.appendChild(li);
        
        maaan.appendChild(ul);
        

    });
};

    const getFetchData = async (url) => {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    };

    try {
        const code = getFetchData('images.json');
        showImages(code);
    }
    catch{
        const error = err;
        console.log(error);
    }