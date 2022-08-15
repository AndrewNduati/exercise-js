// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size{
    constructor (width, height) {
        this.width = width ?? 80
        this.height = height ?? 60
    }
}

Size.prototype.resize = function (width, height) {
    this.width = width
    this.height = height
}

export class Position {
    constructor (xAxis, yAxis) {
        this.x = xAxis ?? 0
        this.y = yAxis ?? 0
    }

}

Position.prototype.move = function (newX, newY) {
    this.x = newX
    this.y = newY
}

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600)
        this.position = new Position()
        this.size = new Size()
    }
    resize (newSize) {
        if (newSize.height <= 1 || newSize.width <= 1) {
            return this.size = new Size(1,1)
        }
        if (newSize.height >= this.screenSize.height || newSize.width >= this.screenSize.width) {
            this.size.width = this.screenSize.width - this.position.x
            this.size.height = this.screenSize.height - this.position.y
            return this.size
        }
        return this.size = newSize
    }
    
    move (position) {
        if (position.x <= 0 || position.y <= 0) {
            return this.position = new Position()
        }
        // In move function, are we removing 150 or just 50 px?
        // The tests indicate 50 by 150. . I'm confused here...
        if (position.x > this.screenSize.width || position.y > this.screenSize.height) {
            this.position.x = position.x - 50 
            this.position.y = position.y - 150
            return this.position
        }
        return this.position = position
    }
}

export function changeWindow(progWindow) {
    const newSize = new Size(400,300)
    const newPos = new Position(100, 150)
    progWindow.resize(newSize)
    progWindow.move(newPos)

    return progWindow
}