import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// const geometry1 = new THREE.BoxGeometry(1, 1, 1)
// const material1 = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh1 = new THREE.Mesh(geometry1, material1)
// scene.add(mesh1)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 6
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// const clock = new THREE.Clock()
const axis = new THREE.AxesHelper()
scene.add(axis)

gsap.to(mesh.position, { duration: 2, delay: 1, x: 3 })
gsap.to(mesh.position, { duration: 3, delay: 3, y: 2 })
gsap.to(mesh.position, { duration: 5, delay: 6, x: 0, y: 0 })
const tick = () => {

    // camera.position.x = Math.cos(elapsedTime)
    // camera.position.y = Math.sin(elapsedTime)

    // mesh.position.x = Math.cos(elapsedTime)
    // mesh.position.y = Math.sin(elapsedTime)
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()