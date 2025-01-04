window.pageContent = `
  <!-- Center Content Starts -->
<div class="center-content">
<div class="container-hp">
<img src="/images/college.jpg" class="img-css" alt="College">
<!-- <center style="padding-top:10px;"> -->
<ul class="paybtn">
<a href="javascript:void(0)"><li class="gradient_4"><img src="/images/enrol.png"> Apply Enrollment</li></a>
<a href="#" id="payfee"><li>Pay Fee Online</li></a>
<a href="javascript:void(0)"><li>Fill Exam Form</li></a>
<a href="javascript:void(0)"><li>Print Admit Card</li></a>
<a href="javascript:void(0)"><li>Online Results</li></a>
</ul>
</div>

<!-- Gallery Starts -->
<div class="mt-20"><h2>Gallery</h2></div>
<div class="Gallery">
<div class="GalleryImg">
 <img src="/images/img1.jpg" alt="photo" />
</div>
  
<div class="GalleryImg">
 <img src="/images/img2.jpg" alt="photo" />
</div>

<div class="GalleryImg">
<img src="/images/img3.jpg" alt="photo" />
</div>

<div class="GalleryImg">
<img src="/images/img4.jpg" alt="photo" />
</div>

</div>
<!-- Gallery Ends-->
</div>

<style>
.container-hp {
display: block;
}

@media screen and (min-width: 600px) {
.container-hp {
box-sizing: border-box;
display: flex;
justify-content: center; /* Center horizontally */
align-items: center; /* Center vertically */
background-color: #f4f2f2;
padding: 15px;
}
.container-hp .img-css {
padding: 5px;
vertical-align: middle;
}
.container-hp .paybtn {
padding: 5px;
vertical-align: middle;
}
.Gallery {
padding: 10px 50px 50px 50px;
}
.center-content h2 {
font-size: 30px;
}
</style>
`;

window.pageTitle = "Home";