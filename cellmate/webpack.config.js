import path from "path";
import {fileURLToPath} from "url";
import CopyPlugin from "copy-webpack-plugin";

const metaUrl = new URL(".", import.meta.url);
const __dirname = fileURLToPath(metaUrl.href);

export default () => {

    const sharedConfig = {
        // watch: true,
        entry: "./src/index.js",
        mode: "development",
        devtool: "source-map",
        experiments: {
            outputModule: true
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, "node_modules", "cellmate", "dist", "cellmate.css"),
                        to: path.resolve(__dirname, "dist", "cellmate.css")
                    }
                ],
            }),
        ],
    };
    const moduleConfig = {
        ...sharedConfig,
        output: {
            path: path.resolve("./", "dist"),
            filename: "cellmate.js",
            libraryTarget: "module"
        }
    };

    const cjsConfig = {
        ...sharedConfig,
        output: {
            path: path.resolve("./", "dist"),
            filename: "cellmate.cjs",
            iife: true,
            library: {
                type: "umd",
            },
        }
    }

    return [moduleConfig, cjsConfig];

}
