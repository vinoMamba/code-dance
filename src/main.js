import "./style.css"
import string1 from "./pcStyle";
import string2 from "./mobileStyle";

class Player {
    id = undefined
    string = ''
    n = 0
    time = 50
    flag = false
    ui = {
        code: document.querySelector('#code'),
        style: document.head.appendChild(document.createElement("style"))
    }

    init() {
        this.play()
        this.bindEvents()
    }

    bindEvents() {
        const events = {
            '#reduceBtn': 'reduce',
            '#toggleBtn': 'toggle',
            '#quickBtn': 'quick'
        }
        for (let k in events) {
            if (events.hasOwnProperty(k)) {
                document.querySelector(k).onclick = this[events[k]].bind(this)
            }
        }
    }

    play() {
        document.querySelector('#toggleBtn').innerHTML = '暂停'
        this.flag = false
        this.id = setInterval(() => {
            if (this.n > this.string.length) {
                window.clearInterval(this.id)
            } else {
                this.n += 1
                this.string = (document.body.clientWidth < 500 ? string2 : string1)
                this.ui.code.innerText = this.string.substring(0, this.n)
                this.ui.style.innerHTML = this.string.substring(0, this.n)
                this.ui.code.scrollTop = this.ui.code.scrollHeight
            }
        }, this.time)
    }

    pause() {
        window.clearInterval(this.id)
    }

    toggle() {
        if (this.flag === false) {
            this.pause()
            document.querySelector('#toggleBtn').innerHTML = '开始'
            this.flag = true
        } else {
            this.play()
        }
    }

    reduce() {
        this.pause()
        this.time = 100
        this.play()
    }

    quick() {
        this.pause()
        this.time = 0
        this.play()
    }
}

const player = new Player()

player.init()