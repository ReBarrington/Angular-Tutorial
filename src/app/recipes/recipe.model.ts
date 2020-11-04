// created new file here
// a blueprint for objects we create
// how should a recipe look?

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
        // used to create new instance of this class
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}