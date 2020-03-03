const fs = require("fs");
const path = require("path");
const appConfig = "./app-config.json";
import DefaultApplicationController from "../scripts/controllers/base-controllers/DefaultApplicationController";

let buildSiteMap = function() {

    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    };

    let websiteBase = process.argv.slice(2);

    if (!isValidUrl(websiteBase)) {
        throw new Error("Invalid base path.")
    }


    let readFileData = function(pageStructureUrl, callback) {
        fs.readFile(path.resolve(pageStructureUrl), (err, data) => {
            if (err) {
                console.log(err);
            } else {
                callback(JSON.parse(data));
            }
        })
    }

    readFileData(appConfig, function(globalNavigation) {
        let configuration = DefaultApplicationController._prepareConfiguration(globalNavigation, websiteBase);

        let siteMap = "";
        let historyType = configuration.historyType;
        let realBase = websiteBase;

        switch (historyType) {
            case "query":
                realBase = `${realBase}/`;
                break;
            case "hash":
                realBase = `${realBase}/#`;
                break;
        }

        let buildXMLTag = function(websitePages) {

            websitePages.forEach(page => {

                if (page.type !== "abstract") {
                    siteMap += `<url>
        <loc>${realBase}${page.path}</loc>
      </url>`;
                }

                if (page.children) {
                    buildXMLTag(page.children)
                }
            });
        };

        buildXMLTag(configuration.menu);


        siteMap = `<?xml version="1.0" encoding="UTF-8"?>
                 <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                 ${siteMap}
                 </urlset>`;
        fs.writeFile("./sitemap.xml", siteMap, function(err) {
            if (err) {
                console.log("An error occurred while generating the sitemap");
            } else {
                console.log("Sitemap was successfully generated");
            }

        })
    })
};

buildSiteMap();