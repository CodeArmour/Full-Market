let canvas = document.getElementById("my_canvas")
let context = document.getContext("2d")

const speed = 4
let postison = 0
let moveSpeed = speed
let raduis = 40


function moveBall(){
    if(postison+raduis > 640){
        moveSpeed= -speed
    }else if(postison-raduis<0){
        moveSpeed=speed
    }
    postison+=moveSpeed
}

function drawBall(){
    context.clearRect(0,0,640,480)

    context.fillStyle="#62687f"
    context.beginPath()
    context.arc(postison,50,raduis,0,2*Math.PI)
    context.fill()
}

function animate(){
    moveBall()
    drawBall()
    window.requestAnimationFrame(animate)
}
window.requestAnimationFrame(animate)