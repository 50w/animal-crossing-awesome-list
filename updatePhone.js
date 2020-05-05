let fs = require('fs');


let readme = fs.readFileSync('README.md', 'utf-8');

// console.log(readme)

const tableStart = `|-|-|-|`
const tableEnd = `\n\n`


// Get only the table from readme
const table = readme.split(tableStart)[1].split(tableEnd)[0]

// Split table into array or rows (remove empty first row)
const appDelimiter = `\n`
const rowList = table.split(appDelimiter)
rowList.shift()

// Conver md rows into app objects
const appList = rowList.map(rowToApp)

// Save App Objects to content directory

saveApps(appList)

// Utilities

function rowToApp(row) {
    const [rawTitle, description, rawImg] = row.substring(1, row.length - 1).split('|')
    const titleExp = /\[([^)]+)\]/;
    const linkExp =  /\(([^)]+)\)/;
    const imgExp =  /\'([^)]+)\'/;
    return {
        title: titleExp.exec(rawTitle)[1],
        link: linkExp.exec(rawTitle)[1],
        description,
        img: imgExp.exec(rawImg)[1]
    }
}

async function saveApps(appArr) {
    fs.writeFile("src/content/apps.json", JSON.stringify(appArr, null, 2), function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Success!')
        }
    });
}