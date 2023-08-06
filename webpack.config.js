const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


const filepath = (pathData) => {
    const rootFile = ['background', 'content-script']
    // If the chunk name is "background", use a specific filename
    if (rootFile.includes(pathData.chunk.name)) {
       return '[name].js';
    }
    // Otherwise, use the directory structure
    return '[name]/[name].js';
}

const mapHtmlPlugin = (chunks) => {
    const htmlPluginList = chunks.map(chunk => {
        return new HtmlWebpackPlugin({
            title: 'React Chrome Extension',
            filename: `${chunk}.html`,
            chunks: [`${chunk}`]
        })
    })
    return htmlPluginList
}

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry:{
        popup: path.resolve('src/popup/popup.tsx'),
        options: path.resolve('src/options/options.tsx'),
        background: path.resolve('src/background.ts'),
        "content-script": path.resolve('src/content-script.ts')
    }, // entry point, this is the place where it will start building dependency graph
    module: {
        // To compile typescript file it needs additional module
        // don't have to import ts-loader
        rules: [{
            use: 'ts-loader',
            test: /\.tsx?$/,
            exclude: /node_modules/
        }],
    },
    plugins: [
        // It's not directly editing or compliling
        new CopyPlugin({
            patterns: [{
                from: path.resolve('src/manifest.json'),
                to: path.resolve('dist')
            }, {
                from: path.resolve('src/assets'),
                to: path.resolve('dist/assets')
            }]
        }),
        ...mapHtmlPlugin(['popup', 'options'])
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        filename: filepath,
        path: path.resolve('dist')
    }
}