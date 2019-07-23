const path = require('path');
var fs = require("fs");
const CopyWebpackPlugin = require('copy-webpack-plugin');

includehtml = (content, srcpath) => content.toString().split(/\r\n/).map(l => {
    const re = /^(\s+)<!--\s+include\s+(\S+)\s+-->/;
    const result = re.exec(l);
    if (!result) return l;
    const indent = result[1];
    const filename = path.join(path.dirname(srcpath), result[2]);
    const data = fs.readFileSync(filename);
    return data.toString().split(/\r\n/).map(l => {
        return l ? indent + l : l;
    }).join('\r\n');
}).join('\r\n');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    performance: {
        maxEntrypointSize: 800000,
        maxAssetSize: 800000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            importLoaders: 2
                        },
                    },
                    {
                        loader: 'sass-loader',
                    }
                ],
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin(
            [
                {
                    from: '*',
                    ignore: ['*.part.html', '*.partial.html'],
                    context: 'src/html',
                    transform: includehtml
                }
            ]
        ),
        new CopyWebpackPlugin(
            [
                {
                    from: '*',
                    to: 'images/',
                    context: 'src/images'
                }
            ]
        )
    ]
};
