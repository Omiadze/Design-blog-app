import React, {useRef} from 'react'
import Banner from '../Home/Banner'
import Blogs from '../Home/Blogs'
import ViewAllBtn from '../Home/ViewAllBtn'

const blogData = [
    {
        img: "https://static.wixstatic.com/media/e32fd518921d4fc2a430ff518109eccd.png/v1/fill/w_460,h_345,fp_0.50_0.50,q_95,enc_auto/e32fd518921d4fc2a430ff518109eccd.png",
        svg: "",
        author: "Admin",
        title: "PLAYING WITH PATTERNS",
        text: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
        views: "0",
        Comments: "0",
        heart: ""

    },
    {
        img: "https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_460,h_345,fp_0.50_0.50,q_90,enc_auto/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg",
        svg: "",
        author: "Admin",
        title: "NATALIA'S APARTMENT MAKEOVER",
        text: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
        views: "0",
        Comments: "0",
        heart: ""

    },
    {
        img: "https://static.wixstatic.com/media/84bcc4ac73e5416fb9b9aa9231ccabaf.jpg/v1/fill/w_460,h_345,fp_0.50_0.50,q_90,enc_auto/84bcc4ac73e5416fb9b9aa9231ccabaf.jpg",
        svg: "",
        author: "Admin",
        title: "OFF THE WALL DESIGN DECOR",
        text: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
        views: "0",
        Comments: "0",
        heart: ""

    },
    {
        img: "https://static.wixstatic.com/media/84770f_4177efdaeb1849cd90e492cfdb8709dc~mv2_d_7360_4912_s_4_2.jpg/v1/fill/w_460,h_345,fp_0.50_0.50,q_90,enc_auto/84770f_4177efdaeb1849cd90e492cfdb8709dc~mv2_d_7360_4912_s_4_2.jpgs",
        svg: "",
        author: "Admin",
        title: "OPEN HOUSE STAGING",
        text: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
        views: "0",
        Comments: "0",
        heart: ""

    },
]

const Home = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 300, // Adjust this value as needed to scroll by the desired width
      behavior: 'smooth'
    });
  };
  return (
    <div>
        <Banner/>
        <div className='flex flex-col gap-5 mt-5 bg-white shadow-md rounded-lg p-5 justify-center items-center'>
            {blogData.map((card, index) => (
              <Blogs key={index} card={card}/>
            ))}
            
            <ViewAllBtn/>
          </div>
          {/* Scrolling image slider */}
       {/* Scrolling image slider */}
       <div className="overflow-x-auto mt-5 flex items-center justify-center" ref={sliderRef}>
        {blogData.map((blog, index) => (
          <img key={index} src={blog.img} alt={blog.title} className="w-64 h-auto mr-4" />
        ))}
      </div>
      
      {/* Right arrow button */}
      <button className="mt-2" onClick={scrollRight}>Next</button>

          
    </div>
  )
}

export default Home