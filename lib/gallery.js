class Gallery {
    constructor(selector, images, options) {
        this.selector = document.querySelector(selector)
        this.images = images
        this.options = options
        this.currentImage = 0
    }
    init() {
        this.render()
    } 
    render = () => {
        this.selector.innerHTML = ""
        //base
        let base = document.createElement('div')
            base.classList.add('gallery')
            this.selector.appendChild(base)
        base = this.selector.querySelector('.gallery')
        let leftArrow = document.createElement('div')
            leftArrow.classList.add('gallery-left-arrow')
            leftArrow.onclick = () => {this.move(-1)}
            base.appendChild(leftArrow)
        let rightArrow = document.createElement('div')
            rightArrow.classList.add('gallery-right-arrow')
            leftArrow.onclick = () => {this.move(1)}

            base.appendChild(rightArrow)

        //images
        let images = document.createElement('div')
            images.classList.add('gallery-images')
            base.appendChild(images)
        images = base.querySelector('.gallery-images')
        this.images.forEach(image => {
            let img = document.createElement('img')
                img.src = image.src
                img.alt = image.caption
                img.classList.add(this.options.imageClass)
                images.appendChild(img)
        }
        )
    }
    move(direction) {
        const len = this.images.length - 1
        this.currentImage += direction
        if (this.currentImage < 0) {
            this.currentImage = len - this.currentImage
        }
        else if (this.currentImage >= len) {
            this.currentImage = this.currentImage - len
        }
    }
}

let images = [
    {
        "src" : "./pic.jpg",
        "caption": "pog"
    },
    {
        "src" : "./pic.jpg",
        "caption": "pog2"
    },
    {
        "src" : "./pic.jpg",
        "caption": "pog3"
    }
]
let options = { //TODO: defaults
    imgClass: "gallery-image",
    lazyLoad: false, //TODO:
    lazyLoadAmount: 2, //TODO:
    infinite: false, //TODO:
    renderCaptions: false //TODO:
}

let gallery = new Gallery("#gallery", images, options)
gallery.init()

console.log(gallery)
