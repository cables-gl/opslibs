import path from "path";
import {fileURLToPath} from "url";

const metaUrl = new URL(".", import.meta.url);
const __dirname = fileURLToPath(metaUrl.href);

export default () => {
    return [
        {
            entry: "./src/index.js",
            mode: "development",
            devtool: "source-map",
            performance: {
                maxEntrypointSize: 2500000,
                maxAssetSize: 2500000
            },
            experiments: {
                asyncWebAssembly: true
            },
            output: {
                path: path.resolve(__dirname, "dist"),
                filename: "rapier.js",
            }
        }
    ];
}
