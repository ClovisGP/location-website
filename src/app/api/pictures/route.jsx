import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

/**
 * Checks if a file has the right extension to be used as pictures for us
 * @param {string} fileName The file name
 */
const isImageFile = (fileName) => {
    return ['.jpg', '.jpeg', '.png', '.gif'].includes(path.extname(fileName).toLowerCase());
};

/**
 * Generates a list of object line {label, cotegory, path} of the pictures in the directory targeted and its subdir
 * @param {string} directoryTargeted The path of the directory tageted like "./public/images/locations/"
 */
export async function genList(directoryTargeted) {
    try {
        let listToReturn = [];
        const files = await fs.promises.readdir(directoryTargeted);

        for (let file of files) {
            const fullPath = path.join(directoryTargeted, file);
            const stat = await fs.promises.stat(fullPath);

            if (stat.isDirectory()) {
                listToReturn = [...listToReturn, ...await genList(fullPath)];
            } else {
                console.log()
                if (isImageFile(file)) {
                    listToReturn.push(
                        {
                            label: path.basename(file, path.extname(file)).replace('&', ''),
                            category: path.basename(directoryTargeted),
                            path: fullPath.replace('public', '').replace('\\', '/')  //remove the public
                        }
                    );
                }
            }
        }
        return listToReturn;
    } catch (error) {
        console.error("An error occurs in genList for the path: ", directoryTargeted, " The error is: ", error);
        throw new error;
    }
}

/**
 * Gets the list of pictures in the directory public/images/locations/ and its subdir.
 * @param {string} directory - OPTIONAL a subdir of location if we need only one dir. Do not put '/' at the end.
 * @returns [{label, cotegory, path}]
 */
export async function GET(request) {
    try {
        const directory = request.nextUrl.searchParams.get("directory");

        if (directory) {
            if ((typeof directory === "string" || typeof directory === "String") && directory.length)
                return NextResponse.json(
                    { status: 200,
                         body: await genList(`./public/images/locations/${directory}/`) }
                );
            else
                return NextResponse.json({ error: 'Directory bad formatted.', status: 400 });
        }
        return NextResponse.json(
            { status: 200,
            body: await genList(`./public/images/locations/`) 
        }
        );
    } catch (error) {
        console.error("An error occurs in GET of pictures's route. The error is: ", error);
        return NextResponse.json({ error: 'Server error.',
             status: 500 });
    }
}