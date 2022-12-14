const fileInput=document.querySelector(".file-input"),
filterOptions=document.querySelectorAll(".filter button"),
filterName=document.querySelector(".filter-info .name"),
filterSlider=document.querySelector(".slider input"),
filterValue=document.querySelector(".slider .value"),
previewImg=document.querySelector(".preview-img img"),
chooseImgBtn=document.querySelector(".choose-img");

let brightness=100, saturation=100,inversion=0,grayscale=0;

const applyFilters=()=>{
    previewImg.getElementsByClassName.filter=`brightness(${brightness})`
}

const loadImage=()=>{
    let file=fileInput.files[0];
    if(!file) return;
     previewImg.src=URL.createObjectURL(file);
     previewImg.addEventListener("load",()=>{
        document.querySelector(".container").classList.remove("disable")
     })
}
filterOptions.forEach(option => {
    option.addEventListener("click", () => {
        document.querySelector(".filter .active").classList.remove("active");
        option.classList.add("active");
   
        let text=option.innerText
        filterName.innerText = text;
        if(option.id === "brightness") {
            filterSlider.max = "200";
            filterSlider.value = brightness;
            filterValue.innerText = `${brightness}%`;
        } else if(option.id === "saturation") {
            filterSlider.max = "200";
            filterSlider.value = saturation;
            filterValue.innerText = `${saturation}%`
        } else if(option.id === "inversion") {
            filterSlider.max = "100";
            filterSlider.value = inversion;
            filterValue.innerText = `${inversion}%`;
        } else {
            filterSlider.max = "100";
            filterSlider.value = grayscale;
            filterValue.innerText = `${grayscale}%`;
        }
    });
});
const updateFilter=()=>{
    filterValue.innerText=`${filterSlider.value}%`;
    const selectedFilter= document.querySelector(".filter .active")
    if(selectedFilter.id === "brightness") {
        brightness = filterSlider.value;
    } else if(selectedFilter.id === "saturation") {
        saturation = filterSlider.value;
    } else if(selectedFilter.id === "inversion") {
        inversion = filterSlider.value;
    } else {
        grayscale = filterSlider.value;
    }
    applyFilter();
} 

fileInput.addEventListener("change",loadImage);
filterSlider.addEventListener("input",updateFilter)
chooseImgBtn.addEventListener("click",()=> fileInput.click())