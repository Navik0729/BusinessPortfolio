



function Shuffle()
{
    
    var Ran = Math.round(Math.random()*5);
    var Ran2 = Math.round(Math.random()*5);
    var Ran3 = Math.round(Math.random()*5);
    

    const src = ["2025-10-27 (3).png", "2025-10-27 (4).png", "2025-10-27 (5).png", "2025-10-27 (6).png", "2025-10-27 (7).png", "2025-10-27 (8).png"];
    const alt = [ "Image of a business card design", "Image of a flyer design", "Image of a poster design", "Image of a brochure design", "Image of a banner design", "Image of a custom print design"];
        if(Ran == Ran2 || Ran == Ran3 || Ran2 == Ran3)
        {
            Ran = Ran + 1;
            Ran2 = Ran - 1;
            Ran3 = Ran + 2;
            console.log(Ran, Ran2, Ran3, "Repeatition.")

            if(Ran > 5 || Ran2 > 5 || Ran3 > 5)
            {
                Ran = 0;
                Ran2 = 1;
                Ran3 = 2;
                console.log("Greater value than 5.")
            }
        }
    x = document.getElementById("SlideShow1");
    y = document.getElementById("SlideShow2");
    z = document.getElementById("SlideShow3");

  /// Assigning sources and alt texts based on random numbers
    
    x.src = src[Ran];     /// Image 1
    x.alt = alt[Ran];
    console.log(x.src, x.alt, Ran);
    y.src = src[Ran2];    /// Image 2
    y.alt = alt[Ran2];
    console.log(y.src, y.alt, Ran2);
    z.src = src[Ran3];   /// Image 3
    z.alt = alt[Ran3];
    console.log(z.src, z.alt, Ran3);
}
setInterval(Shuffle, 9000);