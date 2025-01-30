// une fonction qui renvoie une list d'object (image, trad, url). Choix par nom de fichier ou all and shuffle

//in js, I want a fucntion taht import all the image and put them in a list. the hirarchie is picture picture/one picture/dos but it can be more directory. I want also the possibilty to import only the picture of one the directory
//{Label, picture, url}


export default async function genList() {
    const listToReturn = [];
    const files = await fs.promises.readdir("./");//files and dir

    for (let file of files) {
        console.log(file)
    }

    return listToReturn;
}
